// Copyright 2024 Mozilla Foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const ZIG_KEYWORDS = new Set([
  'addrspace',
  'align',
  'allowzero',
  'and',
  'anyframe',
  'anytype',
  'asm',
  'async',
  'await',
  'break',
  'callconv',
  'catch',
  'comptime',
  'const',
  'continue',
  'defer',
  'else',
  'enum',
  'errdefer',
  'error',
  'export',
  'extern',
  'fn',
  'for',
  'if',
  'inline',
  'linksection',
  'noalias',
  'noinline',
  'nosuspend',
  'opaque',
  'or',
  'orelse',
  'packed',
  'pub',
  'resume',
  'return',
  'struct',
  'suspend',
  'switch',
  'test',
  'threadlocal',
  'try',
  'union',
  'unreachable',
  'usingnamespace',
  'var',
  'volatile',
  'while',
]);

const ZIG_BUILTINS = new Set([
  '@abs',
  '@addrSpaceCast',
  '@addWithOverflow',
  '@alignCast',
  '@alignOf',
  '@ArgType',
  '@as',
  '@atomicLoad',
  '@atomicRmw',
  '@atomicStore',
  '@bitCast',
  '@bitOffsetOf',
  '@bitreverse',
  '@bitReverse',
  '@bitSizeOf',
  '@boolToInt',
  '@branchHint',
  '@breakpoint',
  '@bswap',
  '@byteOffsetOf',
  '@bytesToSlice',
  '@byteSwap',
  '@call',
  '@cDefine',
  '@ceil',
  '@cImport',
  '@cInclude',
  '@clz',
  '@cmpxchgStrong',
  '@cmpxchgWeak',
  '@compileError',
  '@compileLog',
  '@constCast',
  '@cos',
  '@ctz',
  '@cUndef',
  '@cVaArg',
  '@cVaCopy',
  '@cVaEnd',
  '@cVaStart',
  '@divExact',
  '@divFloor',
  '@divTrunc',
  '@embedFile',
  '@enumFromInt',
  '@enumToInt',
  '@errorCast',
  '@errorFromInt',
  '@errorName',
  '@errorReturnTrace',
  '@errorToInt',
  '@errSetCast',
  '@exp',
  '@exp2',
  '@export',
  '@extern',
  '@fence',
  '@field',
  '@fieldParentPtr',
  '@FieldType',
  '@floatCast',
  '@floatFromInt',
  '@floatToInt',
  '@floor',
  '@frameAddress',
  '@handle',
  '@hasDecl',
  '@hasField',
  '@import',
  '@inComptime',
  '@inlineCall',
  '@intCast',
  '@intFromBool',
  '@intFromEnum',
  '@intFromError',
  '@intFromFloat',
  '@intFromPtr',
  '@intToEnum',
  '@intToError',
  '@intToFloat',
  '@intToPtr',
  '@IntType',
  '@log',
  '@log10',
  '@log2',
  '@max',
  '@memberCount',
  '@memberName',
  '@memberType',
  '@memcpy',
  '@memset',
  '@min',
  '@mod',
  '@mulAdd',
  '@mulWithOverflow',
  '@newStackCall',
  '@noInlineCall',
  '@offsetOf',
  '@OpaqueType',
  '@panic',
  '@popCount',
  '@prefetch',
  '@ptrCast',
  '@ptrFromInt',
  '@ptrToInt',
  '@reduce',
  '@rem',
  '@returnAddress',
  '@round',
  '@select',
  '@setAlignStack',
  '@setCold',
  '@setEvalBranchQuota',
  '@setFloatMode',
  '@setGlobalLinkage',
  '@setRuntimeSafety',
  '@shlExact',
  '@shlWithOverflow',
  '@shrExact',
  '@shuffle',
  '@sin',
  '@sizeOf',
  '@sliceToBytes',
  '@splat',
  '@sqrt',
  '@src',
  '@subWithOverflow',
  '@tagName',
  '@TagType',
  '@tan',
  '@This',
  '@trap',
  '@trunc',
  '@truncate',
  '@Type',
  '@typeId',
  '@typeInfo',
  '@typeName',
  '@typeOf',
  '@TypeOf',
  '@unionInit',
  '@Vector',
  '@volatileCast',
  '@wasmMemoryGrow',
  '@wasmMemorySize',
  '@workGroupId',
  '@workGroupSize',
  '@workItemId',
]);

const ZIG_CONSTANTS = new Set([
  'false',
  'null',
  'true',
  'undefined',
]);

const ZIG_TYPES = new Set([
  'anyerror',
  'anyframe',
  'anyopaque',
  'anytype',
  'bool',
  'c_char',
  'c_int',
  'c_long',
  'c_longdouble',
  'c_longlong',
  'c_short',
  'c_uint',
  'c_ulong',
  'c_ulonglong',
  'c_ushort',
  'comptime_float',
  'comptime_int',
  'error',
  'f128',
  'f16',
  'f32',
  'f64',
  'f80',
  'i128',
  'i16',
  'i2',
  'i29',
  'i3',
  'i32',
  'i4',
  'i5',
  'i6',
  'i64',
  'i7',
  'i8',
  'isize',
  'noreturn',
  'type',
  'u128',
  'u16',
  'u2',
  'u29',
  'u3',
  'u32',
  'u4',
  'u5',
  'u6',
  'u64',
  'u7',
  'u8',
  'usize',
  'void',
]);

class HighlightZig extends Highlighter {

  constructor(delegate) {
    super(delegate);
  }

  feed(input) {
    this.append(input);
  }

  flush() {
    this.delegate.flush();
  }
}

Highlighter.REGISTRY['zig'] = HighlightZig;
