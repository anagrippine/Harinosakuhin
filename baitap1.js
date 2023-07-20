

/*
//Bài tập 1: Tính tổng các phần tử trong mảng
const array = [1, 2, 3, 4, 5]
var sum = 0;
for (i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum)
*/


/*
//Bài tập 2: Tìm phần tử lớn nhất trong mảng
const array = [1, 2, 3, 4, 5]
function sapxepTangDan(a, b) {
    return a - b;
}
array.sort(sapxepTangDan);
for (i = 0; i < array.length; i++) {
    console.log(array[array.length - 1])//in gt cuối
}
*/


/*
//Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
const array = [1, 2, 3, 4, 5]
function sapxepTangDan(a, b) {
    return a - b;
}
array.sort(sapxepTangDan);
for (i = 0; i < array.length; i++) {
    console.log(array[0])//in gt đầu
}
*/


/*
//Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
//Cách 1: Không sử dụng hàm có sẵn
let value = prompt("Nhập số cần tìm")
let array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
    if (value == array[i]) {
        alert('true');
    }
    else alert('false');
}

//Cách 2: Sử dụng hàm có sẵn
let value = prompt("Nhập số cần tìm")
let array = [1, 2, 3, 4, 5]
console.log(array.includes('value'))
*/


/*
//Bài tập 5: Đảo ngược giá trị trong mảng
const array = [1, 2, 3, 4, 5];
array.reverse()
console.log(array);
*/


/*
//Bài tập 6: Lọc các phần tử chẵn trong mảng:
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        continue
    }
    console.log(array[i])
}
*/


/*
//Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
const array = [1, 2, 3, 2, 4, 2, 5]
let value = prompt("Nhập số cần tìm")
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (value == array[i])
        count++;
}
console.log(count)
*/


/*
//Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
const array = [1, 2, 3, 4, 5]
function sapxepTangDan(a, b) {
    return a - b;
}
array.sort(sapxepTangDan);
for (i = 0; i < array.length; i++) {
    console.log(array[i])
}
*/




