#ifndef ICU4XScriptWithExtensions_HPP
#define ICU4XScriptWithExtensions_HPP
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <algorithm>
#include <memory>
#include <variant>
#include <optional>
#include "diplomat_runtime.hpp"

#include "ICU4XScriptWithExtensions.h"

class ICU4XDataProvider;
class ICU4XScriptWithExtensions;
#include "ICU4XError.hpp"
class ICU4XScriptWithExtensionsBorrowed;

/**
 * A destruction policy for using ICU4XScriptWithExtensions with std::unique_ptr.
 */
struct ICU4XScriptWithExtensionsDeleter {
  void operator()(capi::ICU4XScriptWithExtensions* l) const noexcept {
    capi::ICU4XScriptWithExtensions_destroy(l);
  }
};

/**
 * An ICU4X ScriptWithExtensions map object, capable of holding a map of codepoints to scriptextensions values
 * 
 * See the [Rust documentation for `ScriptWithExtensions`](https://unicode-org.github.io/icu4x-docs/doc/icu/properties/script/struct.ScriptWithExtensions.html) for more information.
 */
class ICU4XScriptWithExtensions {
 public:

  /**
   * 
   * 
   * See the [Rust documentation for `load_script_with_extensions_unstable`](https://unicode-org.github.io/icu4x-docs/doc/icu/properties/script/fn.load_script_with_extensions_unstable.html) for more information.
   */
  static diplomat::result<ICU4XScriptWithExtensions, ICU4XError> create(const ICU4XDataProvider& provider);

  /**
   * Get the Script property value for a code point
   * 
   * See the [Rust documentation for `get_script_val`](https://unicode-org.github.io/icu4x-docs/doc/icu/properties/script/struct.ScriptWithExtensionsBorrowed.html#method.get_script_val) for more information.
   */
  uint16_t get_script_val(uint32_t code_point) const;

  /**
   * Check if the Script_Extensions property of the given code point covers the given script
   * 
   * See the [Rust documentation for `has_script`](https://unicode-org.github.io/icu4x-docs/doc/icu/properties/script/struct.ScriptWithExtensionsBorrowed.html#method.has_script) for more information.
   */
  bool has_script(uint32_t code_point, uint16_t script) const;

  /**
   * Borrow this object for a slightly faster variant with more operations
   * 
   * See the [Rust documentation for `as_borrowed`](https://unicode-org.github.io/icu4x-docs/doc/icu/properties/script/struct.ScriptWithExtensions.html#method.as_borrowed) for more information.
   * 
   * Lifetimes: `this` must live at least as long as the output.
   */
  ICU4XScriptWithExtensionsBorrowed as_borrowed() const;
  inline const capi::ICU4XScriptWithExtensions* AsFFI() const { return this->inner.get(); }
  inline capi::ICU4XScriptWithExtensions* AsFFIMut() { return this->inner.get(); }
  inline ICU4XScriptWithExtensions(capi::ICU4XScriptWithExtensions* i) : inner(i) {}
  ICU4XScriptWithExtensions() = default;
  ICU4XScriptWithExtensions(ICU4XScriptWithExtensions&&) noexcept = default;
  ICU4XScriptWithExtensions& operator=(ICU4XScriptWithExtensions&& other) noexcept = default;
 private:
  std::unique_ptr<capi::ICU4XScriptWithExtensions, ICU4XScriptWithExtensionsDeleter> inner;
};

#include "ICU4XDataProvider.hpp"
#include "ICU4XScriptWithExtensionsBorrowed.hpp"

inline diplomat::result<ICU4XScriptWithExtensions, ICU4XError> ICU4XScriptWithExtensions::create(const ICU4XDataProvider& provider) {
  auto diplomat_result_raw_out_value = capi::ICU4XScriptWithExtensions_create(provider.AsFFI());
  diplomat::result<ICU4XScriptWithExtensions, ICU4XError> diplomat_result_out_value;
  if (diplomat_result_raw_out_value.is_ok) {
    diplomat_result_out_value = diplomat::Ok<ICU4XScriptWithExtensions>(std::move(ICU4XScriptWithExtensions(diplomat_result_raw_out_value.ok)));
  } else {
    diplomat_result_out_value = diplomat::Err<ICU4XError>(std::move(static_cast<ICU4XError>(diplomat_result_raw_out_value.err)));
  }
  return diplomat_result_out_value;
}
inline uint16_t ICU4XScriptWithExtensions::get_script_val(uint32_t code_point) const {
  return capi::ICU4XScriptWithExtensions_get_script_val(this->inner.get(), code_point);
}
inline bool ICU4XScriptWithExtensions::has_script(uint32_t code_point, uint16_t script) const {
  return capi::ICU4XScriptWithExtensions_has_script(this->inner.get(), code_point, script);
}
inline ICU4XScriptWithExtensionsBorrowed ICU4XScriptWithExtensions::as_borrowed() const {
  return ICU4XScriptWithExtensionsBorrowed(capi::ICU4XScriptWithExtensions_as_borrowed(this->inner.get()));
}
#endif
