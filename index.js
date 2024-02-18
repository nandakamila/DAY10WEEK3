/* 
1.  Problem : Create a function to convert Excel sheet column title to its corresponding column number.
    Example : AB -> 28
*/

function getColumnTitle(columnTitle) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let columnNumber = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let currentAlphaValue;
        for (let j = 0; j < alpha.length; j++) {
            if (alpha[j] === columnTitle[i]) {
                currentAlphaValue= j + 1;
            }
        }
        columnNumber = columnNumber * 26 + currentAlphaValue;
    }
    return `${columnTitle} = ${columnNumber}`;
}

console.log(getColumnTitle("A"));  
console.log(getColumnTitle("AB")); 
console.log(getColumnTitle("ZY")); 

/*
2.  Problem : Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    Example : [2,2,1]->1
              [4,1,2,1,2]->4
              [1]->1
*/

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min= i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

function removeDuplicates(array) {
    const sortedArray = selectionSort(array);
    let result=[];

    for (let i = 0; i < sortedArray.length; i++) {
        let isUnique = true;

        // CHECK KE INDEX SEBELUMNYA
        if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
            isUnique = false;
        }

        // CHECK KE INDEX SETELAHNYA
        if (i < sortedArray.length - 1 && sortedArray[i] === sortedArray[i + 1]) {
            isUnique = false;
        }

        if (isUnique) {
            result.push(sortedArray[i]);
        }
    }
    return `${array} = ${result}`;
}


console.log(removeDuplicates([2,2,1]));
console.log(removeDuplicates([4,1,2,1,2]));
console.log(removeDuplicates([1]));

/*
3.  Problem  :  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
                An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    Example  :  s = "anagram", t = "nagaram" -> true
                s = "rat", t = "car" -> false
*/

// ANAGRAM ADALAH SALAH SATU JENIS PERMAINAN KATA YANG HURUF-HURUF DI KATA AWAL BIASANYA DIACAK UNTUK MEMBENTUK KATA LAIN ATAU SEBUAH KALIMAT.
// CONTOH : PAHIT > PATIH, BALET > TEBAL/TABEL, PALSU > SULAP

function isAnagram(a,b){
    // MENGHILANGKAN SPASI DAN BUAT KARAKTER LOWER CASE AGAR KONSISTEN UNTUK PENGECEKAN
    // REGULAR EXPRESSION DALAM JAVASCRIPT:
    // //=find /abc/=find abc /\s/ = find satu spasi /\s+/ = find lebih dari satu spasi g = global search
    s = a.replace(/\s+/g, '').toLowerCase();
    t = b.replace(/\s+/g, '').toLowerCase();

    //BUAT FLAG UNTUK PENCOCOKAN
    let flagMatch=[];
    let isMatch;

    //FOR LOOP UNTUK INISIASI KOUNTER FLAG SESUAI DENGAN INDEX T
    //FLAG BY DEFAULT=0 ARTINYA S BELUM DICOCOKAN KE T
    for (let i=0; i<t.length ; i++) {
        flagMatch.push(0);
    }

    //MENCOCOKAN S DENGAN T
    //DARI SETIAP KARAKTER S
    for (let i=0; i<s.length; i++){
        isMatch=false;
        //MENCOCOKAN KE SETIAP KARAKTER T
        for(let j=0;j<t.length;j++){
            //SKIP ITERASI FOR LOOP JIKA KARAKTER SUDAH PERNAH DICOCOKAN LANGSUNG KE ITERASI SETELAHNYA (j++)
            if(flagMatch[j] === 1) continue;
            //JIKA SAMA MAKA DI FLAG UNTUK MENANDAI SUDAH DICOCOKAN, BREAK INNER FOR LOOP KEMBALI KE OUTSIDE FOR LOOP(i++)
            if(s[i]===t[j]){
                flagMatch[j]=1;
                isMatch=true;
                break;
            }
        }
        if (!isMatch) {
            return `${isMatch} ${a} is not anagram of ${b}`;
        }
    }
    return `${isMatch} ${a} is an anagram of ${b}`;;
}

console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car")); 
console.log(isAnagram("Clint Eastwood", "old west action")); 


/*
4.  Problem :You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.
             In how many distinct ways can you climb to the top?
    Example :n=1-> 1
             n=2-> 2
             n=3-> 3 
 
*/

function getSteps(n){
    if (n === 1) return `${n} = 1`; // HANYA ADA SATU CARA UNTUK STEP-1
    if (n === 2) return `${n} = 2`; // HANYA ADA DUA CARA UNTUK STEP-2

    let step1 = 1; // CARA UNTUK STEP-1
    let step2 = 2; // CARA UNTUK STEP-2
    let steps;
    for (let i = 3; i <= n; i++) { //CARA UNTUK STEP 3 DAN SETERUSNYA
        steps = step1 + step2; //CARA UNTUK KE STEP-N ADALAH PENJUMLAHAN DARI KEMUNGKINAN CARA SEBELUMNYA
        step1 = step2; 
        step2 = steps; 
    }
    return `${n} = ${steps}`;
}

console.log(getSteps(1));
console.log(getSteps(2));
console.log(getSteps(3));
console.log(getSteps(15));