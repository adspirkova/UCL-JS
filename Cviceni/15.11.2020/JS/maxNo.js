function salaryRaise(zamestnanci_a){
    const zamestnanci = zamestnanci_a ;
    let mzda = 0;
    let kZamestnanci = [];
    for(let i = 0; i < zamestnanci.length; i++){
        mzda += zamestnanci[i][1];

        if(zamestnanci[i][0][0] === 'K')
            kZamestnanci.push(zamestnanci[i]);
    }
    console.log(mzda);
    let nejlepePlaceny = [[''], [0]];
    mzda /= zamestnanci.length;
    for(let i = 0; i < kZamestnanci.length; i++){
        if(kZamestnanci[i][1] < mzda)
            kZamestnanci[i][1] = Math.round(kZamestnanci[i][1] * 1.1);

        if(nejlepePlaceny[1] < kZamestnanci[i][1]){
            nejlepePlaceny[0] = kZamestnanci[i][0];
            nejlepePlaceny[1] = kZamestnanci[i][1];
        }
    }

    console.log('Nejvyssi plat ' + nejlepePlaceny[1] + ' ma ' + nejlepePlaceny[0]);
}
salaryRaise([['Karel', 22000], ['Pavel', 23000], ['Jiri', 24300], ['Klara', 23200]]);