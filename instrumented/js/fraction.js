function cov_28ctlpjp5b() {
  var path = "/Users/gablaroc/code/personal/recipe-ipsum/src/js/fraction.js";
  var hash = "1fc40a4bc0ed25bb3e5d1ddb70754e6a87107bfb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/gablaroc/code/personal/recipe-ipsum/src/js/fraction.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 4
        },
        end: {
          line: 2,
          column: 32
        }
      },
      "2": {
        start: {
          line: 2,
          column: 23
        },
        end: {
          line: 2,
          column: 32
        }
      },
      "3": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 37
        }
      },
      "4": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "5": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "6": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 10,
          column: 38
        }
      },
      "7": {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 11,
          column: 41
        }
      },
      "8": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 47
        }
      },
      "9": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "10": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 27
        }
      },
      "11": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 12
          },
          end: {
            line: 1,
            column: 13
          }
        },
        loc: {
          start: {
            line: 1,
            column: 27
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 2,
            column: 32
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 2,
            column: 32
          }
        }, {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 2,
            column: 32
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1fc40a4bc0ed25bb3e5d1ddb70754e6a87107bfb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_28ctlpjp5b = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_28ctlpjp5b();
cov_28ctlpjp5b().s[0]++;

const gcd = function (a, b) {
  cov_28ctlpjp5b().f[0]++;
  cov_28ctlpjp5b().s[1]++;

  if (b < 0.0000001) {
    cov_28ctlpjp5b().b[0][0]++;
    cov_28ctlpjp5b().s[2]++;
    return a;
  } else {
    cov_28ctlpjp5b().b[0][1]++;
  } // Since there is a limited precision we need to limit the value.


  cov_28ctlpjp5b().s[3]++;
  return gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
};

cov_28ctlpjp5b().s[4]++;

const decimalToFraction = decimal => {
  cov_28ctlpjp5b().f[1]++;
  const len = (cov_28ctlpjp5b().s[5]++, decimal.toString().length - 2);
  let denominator = (cov_28ctlpjp5b().s[6]++, Math.pow(8, len));
  let numerator = (cov_28ctlpjp5b().s[7]++, decimal * denominator);
  const divisor = (cov_28ctlpjp5b().s[8]++, gcd(numerator, denominator)); // Should be 5

  cov_28ctlpjp5b().s[9]++;
  numerator /= divisor; // Should be 687

  cov_28ctlpjp5b().s[10]++;
  denominator /= divisor; // Should be 2000

  cov_28ctlpjp5b().s[11]++;
  return Math.floor(numerator) + '/' + Math.floor(denominator);
};

export default decimalToFraction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYWN0aW9uLmpzIl0sIm5hbWVzIjpbImdjZCIsImEiLCJiIiwiTWF0aCIsImZsb29yIiwiZGVjaW1hbFRvRnJhY3Rpb24iLCJkZWNpbWFsIiwibGVuIiwidG9TdHJpbmciLCJsZW5ndGgiLCJkZW5vbWluYXRvciIsInBvdyIsIm51bWVyYXRvciIsImRpdmlzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFBQTtBQUFBOztBQUN2QixNQUFJQSxDQUFDLEdBQUcsU0FBUixFQUFtQjtBQUFBO0FBQUE7QUFBQSxXQUFPRCxDQUFQO0FBQVMsR0FBNUI7QUFBQTtBQUFBLEdBRHVCLENBQ3FCOzs7QUFEckI7QUFHdkIsU0FBT0QsR0FBRyxDQUFDRSxDQUFELEVBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLEdBQUdDLENBQWYsQ0FBSixDQUFWLENBSHVCLENBR3FCO0FBQy9DLENBSkQ7Ozs7QUFNQSxNQUFNRyxpQkFBaUIsR0FBSUMsT0FBRCxJQUFhO0FBQUE7QUFDbkMsUUFBTUMsR0FBRyw2QkFBR0QsT0FBTyxDQUFDRSxRQUFSLEdBQW1CQyxNQUFuQixHQUE0QixDQUEvQixDQUFUO0FBRUEsTUFBSUMsV0FBVyw2QkFBR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsQ0FBVCxFQUFZSixHQUFaLENBQUgsQ0FBZjtBQUNBLE1BQUlLLFNBQVMsNkJBQUdOLE9BQU8sR0FBR0ksV0FBYixDQUFiO0FBRUEsUUFBTUcsT0FBTyw2QkFBR2IsR0FBRyxDQUFDWSxTQUFELEVBQVlGLFdBQVosQ0FBTixDQUFiLENBTm1DLENBTWE7O0FBTmI7QUFRbkNFLEVBQUFBLFNBQVMsSUFBSUMsT0FBYixDQVJtQyxDQVFXOztBQVJYO0FBU25DSCxFQUFBQSxXQUFXLElBQUlHLE9BQWYsQ0FUbUMsQ0FTVzs7QUFUWDtBQVduQyxTQUFPVixJQUFJLENBQUNDLEtBQUwsQ0FBV1EsU0FBWCxJQUF3QixHQUF4QixHQUE4QlQsSUFBSSxDQUFDQyxLQUFMLENBQVdNLFdBQVgsQ0FBckM7QUFDSCxDQVpEOztBQWNBLGVBQWVMLGlCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2NkID0gZnVuY3Rpb24oYSwgYikge1xuICAgIGlmIChiIDwgMC4wMDAwMDAxKSByZXR1cm4gYTsgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlcmUgaXMgYSBsaW1pdGVkIHByZWNpc2lvbiB3ZSBuZWVkIHRvIGxpbWl0IHRoZSB2YWx1ZS5cblxuICAgIHJldHVybiBnY2QoYiwgTWF0aC5mbG9vcihhICUgYikpOyAgICAgICAgICAgLy8gRGlzY2FyZCBhbnkgZnJhY3Rpb25zIGR1ZSB0byBsaW1pdGF0aW9ucyBpbiBwcmVjaXNpb24uXG59O1xuXG5jb25zdCBkZWNpbWFsVG9GcmFjdGlvbiA9IChkZWNpbWFsKSA9PiB7XG4gICAgY29uc3QgbGVuID0gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCAtIDI7XG5cbiAgICBsZXQgZGVub21pbmF0b3IgPSBNYXRoLnBvdyg4LCBsZW4pO1xuICAgIGxldCBudW1lcmF0b3IgPSBkZWNpbWFsICogZGVub21pbmF0b3I7XG5cbiAgICBjb25zdCBkaXZpc29yID0gZ2NkKG51bWVyYXRvciwgZGVub21pbmF0b3IpOyAgICAvLyBTaG91bGQgYmUgNVxuXG4gICAgbnVtZXJhdG9yIC89IGRpdmlzb3I7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSA2ODdcbiAgICBkZW5vbWluYXRvciAvPSBkaXZpc29yOyAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIDIwMDBcblxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bWVyYXRvcikgKyAnLycgKyBNYXRoLmZsb29yKGRlbm9taW5hdG9yKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY2ltYWxUb0ZyYWN0aW9uO1xuIl19