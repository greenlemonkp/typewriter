const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {

    // print the char here
     process.stdout.write(char\n); 

 
   }, delay);
   delay = delay + 50;
}
