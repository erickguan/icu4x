// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

//! Options for [`DisplayNames`](crate::DisplayNames).

/// A bag of options defining how region codes will be translated by
/// [`DisplayNames`](crate::DisplayNames).
///
/// # Example
///
/// ```
/// use icu_displaynames::options::{DisplayNamesOptions, Style};
/// use icu_displaynames::displaynames::DisplayNames;
/// use icu_locid::locale;
///
/// let locale = locale!("en-001");
/// let mut options: DisplayNamesOptions = Default::default();
/// options.style = Style::Short;
/// let display_name = DisplayNames::try_new_region_unstable(
///     &icu_testdata::unstable(),
///     &locale.into(),
///     options,
/// )
/// .expect("Data should load successfully");
///
/// let region_code = "BA";
/// assert_eq!(display_name.of(&region_code), Some("Bosnia"));
#[derive(Debug, Eq, PartialEq, Clone, Default)]
#[non_exhaustive]
pub struct DisplayNamesOptions {
    /// The formatting style to use for display name,
    /// defaults to "long".
    pub style: Style,
    /// The fallback return when the system does not have the
    /// requested display name, defaults to "code".
    pub fallback: Fallback,
    /// The language display kind, defaults to "dialect".
    pub language_display: LanguageDisplay,
}

/// An enum for formatting style.
#[allow(missing_docs)] // The variants are self explanotory.
#[non_exhaustive]
#[derive(Debug, Eq, PartialEq, Clone, Copy)]
pub enum Style {
    Narrow,
    Short,
    Long,
}

impl Default for Style {
    fn default() -> Self {
        Self::Long
    }
}

/// An enum for fallback return when the system does not have the
/// requested display name.
#[allow(missing_docs)] // The variants are self explanotory.
#[non_exhaustive]
#[derive(Debug, Eq, PartialEq, Clone, Copy)]
pub enum Fallback {
    Code,
    None,
}

impl Default for Fallback {
    fn default() -> Self {
        Self::Code
    }
}

/// An enum for the language display kind.
#[allow(missing_docs)] // The variants are self explanotory.
#[non_exhaustive]
#[derive(Debug, Eq, PartialEq, Clone, Copy)]
pub enum LanguageDisplay {
    Dialect,
    Standard,
}

impl Default for LanguageDisplay {
    fn default() -> Self {
        Self::Dialect
    }
}
