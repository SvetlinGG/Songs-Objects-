function songs(arr){
    let num = arr.shift();
    let type = arr.pop();
    let song ={};
    for ( let artist of arr){
        let [ typeList, name, time ] = artist.split('_');
    
        song.type = typeList,
        song.name = name,
        song.time = time,
    }
    console.log(song.time);
    

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);