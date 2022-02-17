const{test}=QUnit;
let tomb = []

QUnit.module('ellenorzes()', (hook) => {
    hook.before(()=>{
        this.lojatek = new LOJatek(0);
    })
    test('Létezik-e?',(assert) =>{
      assert.ok(this.lojatek.ellenorzes, "Létezik");
    });
    test('Függvény-e?', (assert) => {
        assert.ok(typeof this.lojatek.ellenorzes === "function", "Függvény");
    });
    test('minden lámpa fel van kapcsolva', (assert)=> {
        let lojatek = new LOJatek(9);
        assert.equal(lojatek.ellenorzes(),"9");
    });
    test('minden lámpa le van kapcsolva', (assert)=> {
        let lojatek = new LOJatek(0);
        assert.equal(lojatek.ellenorzes(),"0");
    });
    test('néhány lámpafel van kapcsolva', (assert)=> {
        let lojatek = new LOJatek(3);
        assert.equal(lojatek.ellenorzes(),"3");
    });
});

QUnit.module('szomszedokValtoztatasa()', (h) => {
    h.beforeEach(()=>{
        this.lojatek = new LOJatek(0);
    });
    test('Létezik-e?',(assert) =>{
        assert.ok(this.lojatek.szomszedokValtoztatasa, "Létezik");
    });
    test('Függvény-e?', (assert) => {
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa === "function", "Függvény");
    });
    test('középső lámpát kapcsoljuk át', (assert)=> {
        // let tomb = [
        //     {ertek: "false"},
        //     {ertek: "false"},
        //     {ertek: "true"},
        //     {ertek: "true"},
        //     {ertek: "false"},
        //     {ertek: "true"},
        //     {ertek: "false"},
        //     {ertek: "false"},
        //     {ertek: "false"}
        // ];
        // let lojatek = new LOJatek(tomb);
        // assert.equal(lojatek.szomszedokValtoztatasa(4), );
        // for (let index = 0; index < 9; index++) {
        //     assert.equal(lampak[4].allapot, true);
        //     index++;
            
        // }
        this.lojatek.szomszedokValtoztatasa(4);
        
        assert.equal(lampak[3].allapot, true);
        assert.equal(lampak[5].allapot, true);
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[7].allapot, true);

        //
    });
    test('bal felső lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(0);
        
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[3].allapot, true);

    });
    test('jobb felső lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(2);
        
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[5].allapot, true);

    });
    test('bal alsó lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(6);
        
        assert.equal(lampak[3].allapot, true);
        assert.equal(lampak[7].allapot, true);

    });
    test('jobb alsó lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(8);
        
        assert.equal(lampak[7].allapot, true);
        assert.equal(lampak[5].allapot, true);

    });
    test('jobb szélső lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(5);
        
        assert.equal(lampak[2].allapot, true);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[8].allapot, true);

    });
    test('bal szélső lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(3);
        
        assert.equal(lampak[0].allapot, true);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[6].allapot, true);

    });
    test('első sor középsőt lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(1);
        
        assert.equal(lampak[0].allapot, true);
        assert.equal(lampak[2].allapot, true);
        assert.equal(lampak[4].allapot, true);

    });
    
    test('utolsó sor középsőt lámpát kapcsoljuk át', (assert)=> {
        
        this.lojatek.szomszedokValtoztatasa(7);
        
        assert.equal(lampak[8].allapot, true);
        assert.equal(lampak[6].allapot, true);
        assert.equal(lampak[4].allapot, true);

    });
});