// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Testing functions.isPhoneNumber()

test('checks if 123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('checks if 123 is a phone number', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});
test('checks if 222-222-2222 is a phone number', () => {
    expect(functions.isPhoneNumber("222-222-2222")).toBe(true);
});
test('checks if 1800call is a phone number', () => {
    expect(functions.isPhoneNumber("1800call")).toBe(false);
});

//Testing functions.isEmail()

test('checks if 23@gmail.com is a valid email', () => {
    expect(functions.isEmail("123@gmail.com")).toBe(true);
});
test('checks if 123@ is a valid email', () => {
    expect(functions.isEmail("123@")).toBe(false);
});
test('checks if guest@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("guest@ucsd.edu")).toBe(true);
});
test('checks if 123@gmail. is a valid email', () => {
    expect(functions.isEmail("123@gmail.")).toBe(false);
});

//Testing functions.isStrongPassword()

test('checks if a_b_c is a valid strong password', () => {
    expect(functions.isStrongPassword("a_b_c")).toBe(true);
});
test('checks if a@b@c is a valid strong password', () => {
    expect(functions.isStrongPassword("a@b@c")).toBe(false);
});
test('checks if a1b2c3d4 is a valid strong password', () => {
    expect(functions.isStrongPassword("a1b2c3d4")).toBe(true);
});
test('checks if 1a2b3c4d is a valid strong password', () => {
    expect(functions.isStrongPassword("1a2b3c4d")).toBe(false);
});

//Testing functions.isDate()

test('checks if 30/05/2020 is a valid date', () => {
    expect(functions.isDate("30/05/2020")).toBe(true);
});
test('checks if 30/05/20 is a valid date', () => {
    expect(functions.isDate("30/05/20")).toBe(false);
});
test('checks if 11/19/2022 is a valid date', () => {
    expect(functions.isDate("11/19/2022")).toBe(true);
});
test('checks if 111/19/2022 is a valid date', () => {
    expect(functions.isDate("111/19/2022")).toBe(false);
});

// Testing functions.isHexColor()

test('checks if #FF0000 is a valid hex color', () => {
    expect(functions.isHexColor("#FF0000")).toBe(true);
});
test('checks if #red is a valid hex color', () => {
    expect(functions.isHexColor("#red")).toBe(false);
});
test('checks if #F0F is a valid hex color', () => {
    expect(functions.isHexColor("#F0F")).toBe(true);
});
test('checks if blue is a valid hex color', () => {
    expect(functions.isHexColor("blue")).toBe(false);
});
