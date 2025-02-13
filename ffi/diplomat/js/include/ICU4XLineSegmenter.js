import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.js"
import { ICU4XError_js_to_rust, ICU4XError_rust_to_js } from "./ICU4XError.js"
import { ICU4XLineBreakIteratorLatin1 } from "./ICU4XLineBreakIteratorLatin1.js"
import { ICU4XLineBreakIteratorUtf16 } from "./ICU4XLineBreakIteratorUtf16.js"
import { ICU4XLineBreakIteratorUtf8 } from "./ICU4XLineBreakIteratorUtf8.js"
import { ICU4XLineBreakRule_js_to_rust, ICU4XLineBreakRule_rust_to_js } from "./ICU4XLineBreakRule.js"
import { ICU4XWordBreakRule_js_to_rust, ICU4XWordBreakRule_rust_to_js } from "./ICU4XWordBreakRule.js"

const ICU4XLineSegmenter_box_destroy_registry = new FinalizationRegistry(underlying => {
  wasm.ICU4XLineSegmenter_destroy(underlying);
});

export class ICU4XLineSegmenter {
  #lifetimeEdges = [];
  constructor(underlying, owned, edges) {
    this.underlying = underlying;
    this.#lifetimeEdges.push(...edges);
    if (owned) {
      ICU4XLineSegmenter_box_destroy_registry.register(this, underlying);
    }
  }

  static create(arg_provider) {
    return (() => {
      const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
      wasm.ICU4XLineSegmenter_create(diplomat_receive_buffer, arg_provider.underlying);
      const is_ok = diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4);
      if (is_ok) {
        const ok_value = new ICU4XLineSegmenter(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), true, []);
        wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        return ok_value;
      } else {
        const throw_value = ICU4XError_rust_to_js[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)];
        wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        throw new diplomatRuntime.FFIError(throw_value);
      }
    })();
  }

  static create_with_options_v1(arg_provider, arg_options) {
    const field_line_break_rule_arg_options = arg_options["line_break_rule"];
    const field_word_break_rule_arg_options = arg_options["word_break_rule"];
    const field_ja_zh_arg_options = arg_options["ja_zh"];
    return (() => {
      const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
      wasm.ICU4XLineSegmenter_create_with_options_v1(diplomat_receive_buffer, arg_provider.underlying, ICU4XLineBreakRule_js_to_rust[field_line_break_rule_arg_options], ICU4XWordBreakRule_js_to_rust[field_word_break_rule_arg_options], field_ja_zh_arg_options);
      const is_ok = diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4);
      if (is_ok) {
        const ok_value = new ICU4XLineSegmenter(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), true, []);
        wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        return ok_value;
      } else {
        const throw_value = ICU4XError_rust_to_js[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)];
        wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        throw new diplomatRuntime.FFIError(throw_value);
      }
    })();
  }

  segment_utf8(arg_input) {
    const buf_arg_input = diplomatRuntime.DiplomatBuf.str(wasm, arg_input);
    return new ICU4XLineBreakIteratorUtf8(wasm.ICU4XLineSegmenter_segment_utf8(this.underlying, buf_arg_input.ptr, buf_arg_input.size), true, [this, buf_arg_input]);
  }

  segment_utf16(arg_input) {
    const buf_arg_input = diplomatRuntime.DiplomatBuf.slice(wasm, arg_input, 2);
    return new ICU4XLineBreakIteratorUtf16(wasm.ICU4XLineSegmenter_segment_utf16(this.underlying, buf_arg_input.ptr, buf_arg_input.size), true, [this, buf_arg_input]);
  }

  segment_latin1(arg_input) {
    const buf_arg_input = diplomatRuntime.DiplomatBuf.slice(wasm, arg_input, 1);
    return new ICU4XLineBreakIteratorLatin1(wasm.ICU4XLineSegmenter_segment_latin1(this.underlying, buf_arg_input.ptr, buf_arg_input.size), true, [this, buf_arg_input]);
  }
}
