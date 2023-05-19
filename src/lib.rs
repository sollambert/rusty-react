use wasm_bindgen::prelude::*;
mod modules;

//Import alert function from JS environment
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

//Welcome function to be utilized by React
#[wasm_bindgen]
pub fn welcome(name: &str) {
    alert(&format!("Hello {}, from Rust!", name));
}