<script>      
       const input2 = Math.floor(Math.random() * 101); 
       console.log(input2);
       let attempt = 5;

       while (attempt > 0) {
       let input1 = prompt("Nhap n");
       console.log(input1);

       if (input1 == input2) {
            alert("You are correct !");
            alert("So luot du cua ban la:" + (attempt - 1));
            break;
       } else if (input1 > input2) {
            alert("Too High");
       } else {
            alert("Tow low");
        }
        attempt--;
        alert("So luot con lai la: " + attempt);
    }
    if (attempt > 5) {
        alert("You are out of choice !");
    }
    </script>