"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    { title: "Album 1", artist: "Artist 1", year: "2020" },
    { title: "Album 2", artist: "Artist 2", year: "2019" },
    { title: "Album 3", artist: "Artist 3", year: "2018" },
  ],
  [Symbol.iterator]() {
    let currentIndex = 0;
    return {
      next:()=> {
        return currentIndex < this.albums.length
         ? { value: this.albums[currentIndex++], done: false }
          : { done: true };
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
