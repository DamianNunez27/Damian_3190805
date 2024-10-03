function tablasMulti() {
    for (let i = 1; i <= 10; i++) {
        console.log("La tabla de", i);
        for (let j = 1; j <= 10; j++) {
            console.log("%d X %d = %d", i, j, (i * j));
        }
        console.log("\n");
    }
}
tablasMulti();
