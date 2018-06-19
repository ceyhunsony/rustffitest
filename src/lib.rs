// use std::ffi::{CStr, CString};

#[no_mangle]
pub extern fn testing_array(len: usize, input: &[u8]) -> i32 {
    let input = input
        .iter()
        .take(len)
        .map(|v| *v)
        .collect::<Vec<_>>();
    let output = input.iter().map(|v| *v as i32).sum();
    println!("Hello, world! input:{:#?}", input);
    let str_equiv = String::from_utf8(input).unwrap();
    println!("As string: {:#?}", str_equiv);
    output
}

