import { FFIError } from "./diplomat-runtime"
import { ICU4XDataProvider } from "./ICU4XDataProvider";
import { ICU4XError } from "./ICU4XError";
import { ICU4XLocale } from "./ICU4XLocale";
import { ICU4XTransformResult } from "./ICU4XTransformResult";

/**

 * A locale canonicalizer.

 * See the {@link https://unicode-org.github.io/icu4x-docs/doc/icu/locid_transform/struct.LocaleCanonicalizer.html Rust documentation for `LocaleCanonicalizer`} for more information.
 */
export class ICU4XLocaleCanonicalizer {

  /**

   * Create a new {@link ICU4XLocaleCanonicalizer `ICU4XLocaleCanonicalizer`}.

   * See the {@link https://unicode-org.github.io/icu4x-docs/doc/icu/locid_transform/struct.LocaleCanonicalizer.html#method.try_new_unstable Rust documentation for `try_new_unstable`} for more information.
   * @throws {@link FFIError}<{@link ICU4XError}>
   */
  static create(provider: ICU4XDataProvider): ICU4XLocaleCanonicalizer | never;

  /**

   * FFI version of `LocaleCanonicalizer::canonicalize()`.

   * See the {@link https://unicode-org.github.io/icu4x-docs/doc/icu/locid_transform/struct.LocaleCanonicalizer.html#method.canonicalize Rust documentation for `canonicalize`} for more information.
   */
  canonicalize(locale: ICU4XLocale): ICU4XTransformResult;
}
