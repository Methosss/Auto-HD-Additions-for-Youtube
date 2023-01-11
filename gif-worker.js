!function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, (function(e) {
                var n = t[o][1][e];
                return s(n || e);
            }), l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    1: [ function(require, module, exports) {
        var NeuQuant = require("./TypedNeuQuant.js"), LZWEncoder = require("./LZWEncoder.js");
        function ByteArray() {
            this.page = -1, this.pages = [], this.newPage();
        }
        ByteArray.pageSize = 4096, ByteArray.charMap = {};
        for (var i = 0; i < 256; i++) ByteArray.charMap[i] = String.fromCharCode(i);
        function GIFEncoder(width, height) {
            this.width = ~~width, this.height = ~~height, this.transparent = null, this.transIndex = 0, 
            this.repeat = -1, this.delay = 0, this.image = null, this.pixels = null, this.indexedPixels = null, 
            this.colorDepth = null, this.colorTab = null, this.neuQuant = null, this.usedEntry = new Array, 
            this.palSize = 7, this.dispose = -1, this.firstFrame = !0, this.sample = 10, this.dither = !1, 
            this.globalPalette = !1, this.out = new ByteArray;
        }
        ByteArray.prototype.newPage = function() {
            this.pages[++this.page] = new Uint8Array(ByteArray.pageSize), this.cursor = 0;
        }, ByteArray.prototype.getData = function() {
            for (var rv = "", p = 0; p < this.pages.length; p++) for (var i = 0; i < ByteArray.pageSize; i++) rv += ByteArray.charMap[this.pages[p][i]];
            return rv;
        }, ByteArray.prototype.writeByte = function(val) {
            this.cursor >= ByteArray.pageSize && this.newPage(), this.pages[this.page][this.cursor++] = val;
        }, ByteArray.prototype.writeUTFBytes = function(string) {
            for (var l = string.length, i = 0; i < l; i++) this.writeByte(string.charCodeAt(i));
        }, ByteArray.prototype.writeBytes = function(array, offset, length) {
            for (var l = length || array.length, i = offset || 0; i < l; i++) this.writeByte(array[i]);
        }, GIFEncoder.prototype.setDelay = function(milliseconds) {
            this.delay = Math.round(milliseconds / 10);
        }, GIFEncoder.prototype.setFrameRate = function(fps) {
            this.delay = Math.round(100 / fps);
        }, GIFEncoder.prototype.setDispose = function(disposalCode) {
            disposalCode >= 0 && (this.dispose = disposalCode);
        }, GIFEncoder.prototype.setRepeat = function(repeat) {
            this.repeat = repeat;
        }, GIFEncoder.prototype.setTransparent = function(color) {
            this.transparent = color;
        }, GIFEncoder.prototype.addFrame = function(imageData) {
            this.image = imageData, this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null, 
            this.getImagePixels(), this.analyzePixels(), !0 === this.globalPalette && (this.globalPalette = this.colorTab), 
            this.firstFrame && (this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()), 
            this.writeGraphicCtrlExt(), this.writeImageDesc(), this.firstFrame || this.globalPalette || this.writePalette(), 
            this.writePixels(), this.firstFrame = !1;
        }, GIFEncoder.prototype.finish = function() {
            this.out.writeByte(59);
        }, GIFEncoder.prototype.setQuality = function(quality) {
            quality < 1 && (quality = 1), this.sample = quality;
        }, GIFEncoder.prototype.setDither = function(dither) {
            !0 === dither && (dither = "FloydSteinberg"), this.dither = dither;
        }, GIFEncoder.prototype.setGlobalPalette = function(palette) {
            this.globalPalette = palette;
        }, GIFEncoder.prototype.getGlobalPalette = function() {
            return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette;
        }, GIFEncoder.prototype.writeHeader = function() {
            this.out.writeUTFBytes("GIF89a");
        }, GIFEncoder.prototype.analyzePixels = function() {
            this.colorTab || (this.neuQuant = new NeuQuant(this.pixels, this.sample), this.neuQuant.buildColormap(), 
            this.colorTab = this.neuQuant.getColormap()), this.dither ? this.ditherPixels(this.dither.replace("-serpentine", ""), null !== this.dither.match(/-serpentine/)) : this.indexPixels(), 
            this.pixels = null, this.colorDepth = 8, this.palSize = 7, null !== this.transparent && (this.transIndex = this.findClosest(this.transparent, !0));
        }, GIFEncoder.prototype.indexPixels = function(imgq) {
            var nPix = this.pixels.length / 3;
            this.indexedPixels = new Uint8Array(nPix);
            for (var k = 0, j = 0; j < nPix; j++) {
                var index = this.findClosestRGB(255 & this.pixels[k++], 255 & this.pixels[k++], 255 & this.pixels[k++]);
                this.usedEntry[index] = !0, this.indexedPixels[j] = index;
            }
        }, GIFEncoder.prototype.ditherPixels = function(kernel, serpentine) {
            var kernels = {
                FalseFloydSteinberg: [ [ 3 / 8, 1, 0 ], [ 3 / 8, 0, 1 ], [ 2 / 8, 1, 1 ] ],
                FloydSteinberg: [ [ 7 / 16, 1, 0 ], [ 3 / 16, -1, 1 ], [ 5 / 16, 0, 1 ], [ 1 / 16, 1, 1 ] ],
                Stucki: [ [ 8 / 42, 1, 0 ], [ 4 / 42, 2, 0 ], [ 2 / 42, -2, 1 ], [ 4 / 42, -1, 1 ], [ 8 / 42, 0, 1 ], [ 4 / 42, 1, 1 ], [ 2 / 42, 2, 1 ], [ 1 / 42, -2, 2 ], [ 2 / 42, -1, 2 ], [ 4 / 42, 0, 2 ], [ 2 / 42, 1, 2 ], [ 1 / 42, 2, 2 ] ],
                Atkinson: [ [ 1 / 8, 1, 0 ], [ 1 / 8, 2, 0 ], [ 1 / 8, -1, 1 ], [ 1 / 8, 0, 1 ], [ 1 / 8, 1, 1 ], [ 1 / 8, 0, 2 ] ]
            };
            if (!kernel || !kernels[kernel]) throw "Unknown dithering kernel: " + kernel;
            var ds = kernels[kernel], index = 0, height = this.height, width = this.width, data = this.pixels, direction = serpentine ? -1 : 1;
            this.indexedPixels = new Uint8Array(this.pixels.length / 3);
            for (var y = 0; y < height; y++) {
                serpentine && (direction *= -1);
                for (var x = 1 == direction ? 0 : width - 1, xend = 1 == direction ? width : 0; x !== xend; x += direction) {
                    var idx = 3 * (index = y * width + x), r1 = data[idx], g1 = data[idx + 1], b1 = data[idx + 2];
                    idx = this.findClosestRGB(r1, g1, b1), this.usedEntry[idx] = !0, this.indexedPixels[index] = idx, 
                    idx *= 3;
                    for (var er = r1 - this.colorTab[idx], eg = g1 - this.colorTab[idx + 1], eb = b1 - this.colorTab[idx + 2], i = 1 == direction ? 0 : ds.length - 1, end = 1 == direction ? ds.length : 0; i !== end; i += direction) {
                        var x1 = ds[i][1], y1 = ds[i][2];
                        if (x1 + x >= 0 && x1 + x < width && y1 + y >= 0 && y1 + y < height) {
                            var d = ds[i][0];
                            idx = index + x1 + y1 * width, data[idx *= 3] = Math.max(0, Math.min(255, data[idx] + er * d)), 
                            data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + eg * d)), data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + eb * d));
                        }
                    }
                }
            }
        }, GIFEncoder.prototype.findClosest = function(c, used) {
            return this.findClosestRGB((16711680 & c) >> 16, (65280 & c) >> 8, 255 & c, used);
        }, GIFEncoder.prototype.findClosestRGB = function(r, g, b, used) {
            if (null === this.colorTab) return -1;
            if (this.neuQuant && !used) return this.neuQuant.lookupRGB(r, g, b);
            for (var minpos = 0, dmin = 16777216, len = this.colorTab.length, i = 0, index = 0; i < len; index++) {
                var dr = r - (255 & this.colorTab[i++]), dg = g - (255 & this.colorTab[i++]), db = b - (255 & this.colorTab[i++]), d = dr * dr + dg * dg + db * db;
                (!used || this.usedEntry[index]) && d < dmin && (dmin = d, minpos = index);
            }
            return minpos;
        }, GIFEncoder.prototype.getImagePixels = function() {
            var w = this.width, h = this.height;
            this.pixels = new Uint8Array(w * h * 3);
            for (var data = this.image, srcPos = 0, count = 0, i = 0; i < h; i++) for (var j = 0; j < w; j++) this.pixels[count++] = data[srcPos++], 
            this.pixels[count++] = data[srcPos++], this.pixels[count++] = data[srcPos++], srcPos++;
        }, GIFEncoder.prototype.writeGraphicCtrlExt = function() {
            var transp, disp;
            this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4), null === this.transparent ? (transp = 0, 
            disp = 0) : (transp = 1, disp = 2), this.dispose >= 0 && (disp = 7 & dispose), disp <<= 2, 
            this.out.writeByte(0 | disp | transp), this.writeShort(this.delay), this.out.writeByte(this.transIndex), 
            this.out.writeByte(0);
        }, GIFEncoder.prototype.writeImageDesc = function() {
            this.out.writeByte(44), this.writeShort(0), this.writeShort(0), this.writeShort(this.width), 
            this.writeShort(this.height), this.firstFrame || this.globalPalette ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize);
        }, GIFEncoder.prototype.writeLSD = function() {
            this.writeShort(this.width), this.writeShort(this.height), this.out.writeByte(240 | this.palSize), 
            this.out.writeByte(0), this.out.writeByte(0);
        }, GIFEncoder.prototype.writeNetscapeExt = function() {
            this.out.writeByte(33), this.out.writeByte(255), this.out.writeByte(11), this.out.writeUTFBytes("NETSCAPE2.0"), 
            this.out.writeByte(3), this.out.writeByte(1), this.writeShort(this.repeat), this.out.writeByte(0);
        }, GIFEncoder.prototype.writePalette = function() {
            this.out.writeBytes(this.colorTab);
            for (var n = 768 - this.colorTab.length, i = 0; i < n; i++) this.out.writeByte(0);
        }, GIFEncoder.prototype.writeShort = function(pValue) {
            this.out.writeByte(255 & pValue), this.out.writeByte(pValue >> 8 & 255);
        }, GIFEncoder.prototype.writePixels = function() {
            new LZWEncoder(this.width, this.height, this.indexedPixels, this.colorDepth).encode(this.out);
        }, GIFEncoder.prototype.stream = function() {
            return this.out;
        }, module.exports = GIFEncoder;
    }, {
        "./LZWEncoder.js": 2,
        "./TypedNeuQuant.js": 3
    } ],
    2: [ function(require, module, exports) {
        var masks = [ 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535 ];
        module.exports = function(width, height, pixels, colorDepth) {
            var cur_accum, a_count, maxcode, g_init_bits, ClearCode, EOFCode, initCodeSize = Math.max(2, colorDepth), accum = new Uint8Array(256), htab = new Int32Array(5003), codetab = new Int32Array(5003), cur_bits = 0, free_ent = 0, clear_flg = !1;
            function char_out(c, outs) {
                accum[a_count++] = c, a_count >= 254 && flush_char(outs);
            }
            function cl_block(outs) {
                cl_hash(5003), free_ent = ClearCode + 2, clear_flg = !0, output(ClearCode, outs);
            }
            function cl_hash(hsize) {
                for (var i = 0; i < hsize; ++i) htab[i] = -1;
            }
            function flush_char(outs) {
                a_count > 0 && (outs.writeByte(a_count), outs.writeBytes(accum, 0, a_count), a_count = 0);
            }
            function MAXCODE(n_bits) {
                return (1 << n_bits) - 1;
            }
            function nextPixel() {
                return 0 === remaining ? -1 : (--remaining, 255 & pixels[curPixel++]);
            }
            function output(code, outs) {
                for (cur_accum &= masks[cur_bits], cur_bits > 0 ? cur_accum |= code << cur_bits : cur_accum = code, 
                cur_bits += n_bits; cur_bits >= 8; ) char_out(255 & cur_accum, outs), cur_accum >>= 8, 
                cur_bits -= 8;
                if ((free_ent > maxcode || clear_flg) && (clear_flg ? (maxcode = MAXCODE(n_bits = g_init_bits), 
                clear_flg = !1) : (++n_bits, maxcode = 12 == n_bits ? 4096 : MAXCODE(n_bits))), 
                code == EOFCode) {
                    for (;cur_bits > 0; ) char_out(255 & cur_accum, outs), cur_accum >>= 8, cur_bits -= 8;
                    flush_char(outs);
                }
            }
            this.encode = function(outs) {
                outs.writeByte(initCodeSize), remaining = width * height, curPixel = 0, function(init_bits, outs) {
                    var fcode, c, i, ent, disp, hshift;
                    for (g_init_bits = init_bits, clear_flg = !1, n_bits = g_init_bits, maxcode = MAXCODE(n_bits), 
                    EOFCode = 1 + (ClearCode = 1 << init_bits - 1), free_ent = ClearCode + 2, a_count = 0, 
                    ent = nextPixel(), hshift = 0, fcode = 5003; fcode < 65536; fcode *= 2) ++hshift;
                    hshift = 8 - hshift, cl_hash(5003), output(ClearCode, outs);
                    outer_loop: for (;-1 != (c = nextPixel()); ) if (fcode = (c << 12) + ent, htab[i = c << hshift ^ ent] !== fcode) {
                        if (htab[i] >= 0) {
                            disp = 5003 - i, 0 === i && (disp = 1);
                            do {
                                if ((i -= disp) < 0 && (i += 5003), htab[i] === fcode) {
                                    ent = codetab[i];
                                    continue outer_loop;
                                }
                            } while (htab[i] >= 0);
                        }
                        output(ent, outs), ent = c, free_ent < 4096 ? (codetab[i] = free_ent++, htab[i] = fcode) : cl_block(outs);
                    } else ent = codetab[i];
                    output(ent, outs), output(EOFCode, outs);
                }(initCodeSize + 1, outs), outs.writeByte(0);
            };
        };
    }, {} ],
    3: [ function(require, module, exports) {
        module.exports = function(pixels, samplefac) {
            var network, netindex, bias, freq, radpower;
            function altersingle(alpha, i, b, g, r) {
                network[i][0] -= alpha * (network[i][0] - b) / 1024, network[i][1] -= alpha * (network[i][1] - g) / 1024, 
                network[i][2] -= alpha * (network[i][2] - r) / 1024;
            }
            function alterneigh(radius, i, b, g, r) {
                for (var p, a, lo = Math.abs(i - radius), hi = Math.min(i + radius, 256), j = i + 1, k = i - 1, m = 1; j < hi || k > lo; ) a = radpower[m++], 
                j < hi && ((p = network[j++])[0] -= a * (p[0] - b) / 262144, p[1] -= a * (p[1] - g) / 262144, 
                p[2] -= a * (p[2] - r) / 262144), k > lo && ((p = network[k--])[0] -= a * (p[0] - b) / 262144, 
                p[1] -= a * (p[1] - g) / 262144, p[2] -= a * (p[2] - r) / 262144);
            }
            function contest(b, g, r) {
                var i, n, dist, biasdist, betafreq, bestd = ~(1 << 31), bestbiasd = bestd, bestpos = -1, bestbiaspos = bestpos;
                for (i = 0; i < 256; i++) n = network[i], (dist = Math.abs(n[0] - b) + Math.abs(n[1] - g) + Math.abs(n[2] - r)) < bestd && (bestd = dist, 
                bestpos = i), (biasdist = dist - (bias[i] >> 12)) < bestbiasd && (bestbiasd = biasdist, 
                bestbiaspos = i), betafreq = freq[i] >> 10, freq[i] -= betafreq, bias[i] += betafreq << 10;
                return freq[bestpos] += 64, bias[bestpos] -= 65536, bestbiaspos;
            }
            this.buildColormap = function() {
                !function() {
                    var i, v;
                    for (network = [], netindex = new Int32Array(256), bias = new Int32Array(256), freq = new Int32Array(256), 
                    radpower = new Int32Array(32), i = 0; i < 256; i++) v = (i << 12) / 256, network[i] = new Float64Array([ v, v, v, 0 ]), 
                    freq[i] = 256, bias[i] = 0;
                }(), function() {
                    var i, step, b, g, r, j, lengthcount = pixels.length, alphadec = 30 + (samplefac - 1) / 3, samplepixels = lengthcount / (3 * samplefac), delta = ~~(samplepixels / 100), alpha = 1024, radius = 2048, rad = radius >> 6;
                    for (rad <= 1 && (rad = 0), i = 0; i < rad; i++) radpower[i] = alpha * (256 * (rad * rad - i * i) / (rad * rad));
                    lengthcount < 1509 ? (samplefac = 1, step = 3) : step = lengthcount % 499 != 0 ? 1497 : lengthcount % 491 != 0 ? 1473 : lengthcount % 487 != 0 ? 1461 : 1509;
                    var pix = 0;
                    for (i = 0; i < samplepixels; ) if (altersingle(alpha, j = contest(b = (255 & pixels[pix]) << 4, g = (255 & pixels[pix + 1]) << 4, r = (255 & pixels[pix + 2]) << 4), b, g, r), 
                    0 !== rad && alterneigh(rad, j, b, g, r), (pix += step) >= lengthcount && (pix -= lengthcount), 
                    0 === delta && (delta = 1), ++i % delta == 0) for (alpha -= alpha / alphadec, (rad = (radius -= radius / 30) >> 6) <= 1 && (rad = 0), 
                    j = 0; j < rad; j++) radpower[j] = alpha * (256 * (rad * rad - j * j) / (rad * rad));
                }(), function() {
                    for (var i = 0; i < 256; i++) network[i][0] >>= 4, network[i][1] >>= 4, network[i][2] >>= 4, 
                    network[i][3] = i;
                }(), function() {
                    var i, j, p, q, smallpos, smallval, previouscol = 0, startpos = 0;
                    for (i = 0; i < 256; i++) {
                        for (smallpos = i, smallval = (p = network[i])[1], j = i + 1; j < 256; j++) (q = network[j])[1] < smallval && (smallpos = j, 
                        smallval = q[1]);
                        if (q = network[smallpos], i != smallpos && (j = q[0], q[0] = p[0], p[0] = j, j = q[1], 
                        q[1] = p[1], p[1] = j, j = q[2], q[2] = p[2], p[2] = j, j = q[3], q[3] = p[3], p[3] = j), 
                        smallval != previouscol) {
                            for (netindex[previouscol] = startpos + i >> 1, j = previouscol + 1; j < smallval; j++) netindex[j] = i;
                            previouscol = smallval, startpos = i;
                        }
                    }
                    for (netindex[previouscol] = startpos + 255 >> 1, j = previouscol + 1; j < 256; j++) netindex[j] = 255;
                }();
            }, this.getColormap = function() {
                for (var map = [], index = [], i = 0; i < 256; i++) index[network[i][3]] = i;
                for (var k = 0, l = 0; l < 256; l++) {
                    var j = index[l];
                    map[k++] = network[j][0], map[k++] = network[j][1], map[k++] = network[j][2];
                }
                return map;
            }, this.lookupRGB = function(b, g, r) {
                for (var a, p, dist, bestd = 1e3, best = -1, i = netindex[g], j = i - 1; i < 256 || j >= 0; ) i < 256 && ((dist = (p = network[i])[1] - g) >= bestd ? i = 256 : (i++, 
                dist < 0 && (dist = -dist), (a = p[0] - b) < 0 && (a = -a), (dist += a) < bestd && ((a = p[2] - r) < 0 && (a = -a), 
                (dist += a) < bestd && (bestd = dist, best = p[3])))), j >= 0 && ((dist = g - (p = network[j])[1]) >= bestd ? j = -1 : (j--, 
                dist < 0 && (dist = -dist), (a = p[0] - b) < 0 && (a = -a), (dist += a) < bestd && ((a = p[2] - r) < 0 && (a = -a), 
                (dist += a) < bestd && (bestd = dist, best = p[3]))));
                return best;
            };
        };
    }, {} ],
    4: [ function(require, module, exports) {
        var GIFEncoder, renderFrame;
        GIFEncoder = require("./GIFEncoder.js"), renderFrame = function(frame) {
            var encoder, page, stream, transfer;
            return encoder = new GIFEncoder(frame.width, frame.height), 0 === frame.index ? encoder.writeHeader() : encoder.firstFrame = !1, 
            encoder.setTransparent(frame.transparent), encoder.setRepeat(frame.repeat), encoder.setDelay(frame.delay), 
            encoder.setQuality(frame.quality), encoder.setDither(frame.dither), encoder.setGlobalPalette(frame.globalPalette), 
            encoder.addFrame(frame.data), frame.last && encoder.finish(), !0 === frame.globalPalette && (frame.globalPalette = encoder.getGlobalPalette()), 
            stream = encoder.stream(), frame.data = stream.pages, frame.cursor = stream.cursor, 
            frame.pageSize = stream.constructor.pageSize, frame.canTransfer ? (transfer = function() {
                var i, len, ref, results;
                for (results = [], i = 0, len = (ref = frame.data).length; i < len; i++) page = ref[i], 
                results.push(page.buffer);
                return results;
            }(), self.postMessage(frame, transfer)) : self.postMessage(frame);
        }, self.onmessage = function(event) {
            return renderFrame(event.data);
        };
    }, {
        "./GIFEncoder.js": 1
    } ]
}, {}, [ 4 ]);