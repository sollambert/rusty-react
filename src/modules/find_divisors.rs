use wasm_bindgen::prelude::*;

//External bindgen imports from JS
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}
#[wasm_bindgen(js_namespace = console)]
extern "C" {
    pub fn log(s: &str);
}

//Bindgen export for find_divisors function
#[wasm_bindgen]
/**
* @param {u64} min
* @param {u64} max
* @param {bool} display_time
* function that calls list_squared and displays time to execute if display_time is true
*/
pub fn find_divisors(min: u64, max: u64, display_time: bool) {
    let start = js_sys::Date::now();
    log(&format!("{:?}", list_squared(min, max)));
    if display_time {
        alert(&format!("Time to execute: {} seconds", (js_sys::Date::now() - start) as f32/1000.0));
    }
}

/**
 * @param {u64} min
 * @param {u64} max
 * @return {Vec<(u64, u64)>}
 * Iterates through all numbers between min and max inclusively
 * looking for any numbers who's squared divisors sum to a perfect square
 * then returns all matching numbers as a tuple
 */
fn list_squared(min: u64, max: u64) -> Vec<(u64, u64)> {
    let mut tuples: Vec<(u64, u64)> = vec![];
    for num in min..max+1 {
        let mut divisors = get_divisors(num);
        square_divisors(&mut divisors);
        let sum = divisors.iter().sum();
        let sqrt = f64::sqrt(sum as f64);
        let mut div_string = String::from("");
        for divisor in divisors {
            div_string.push_str(format!("{},", divisor).as_str());
        }
        if  sqrt % 1.0 == 0.0 {
            tuples.push((num, sum));
        }
    }
    tuples
}

/**
 * @param {&Vec<u64>} divisors
 * @return {&Vec<u64>}
 * Squares all elements of given vector and returns as reference
 */
fn square_divisors<'a>(divisors: &'a mut Vec<u64>) -> &'a Vec<u64> {
    for index in 0..divisors.len() {
        divisors[index] = divisors[index] * divisors[index];
    }
    divisors
}

/**
 * @param {u64} num
 * @return {Vec<u64>}
 * Returns a vector of all divisors of supplied u64 number
 */
fn get_divisors(num: u64) -> Vec<u64> {
    let mut divisor = 1;
    let mut divisors: Vec<u64> = vec![];
    let sqrt = f64::sqrt(num as f64);
    while divisor <= sqrt as u64 || divisor == 1 {
        if num % divisor == 0 && !divisors.contains(&divisor) {
            divisors.push(divisor);
            let other = num / divisor;
                if other != divisor {divisors.push(other);}
        }
        divisor += 1;
    }
    divisors
}