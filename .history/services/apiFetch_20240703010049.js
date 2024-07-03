import * as SQLite from "expo-sqlite";



  const db = SQLite.openDatabaseAsync("../assets/database/bible.db");

      const fetchData = async () => {
        let query = "";
        switch (book) {
          case "Old Testament":
            query = "SELECT DISTINCT book_name FROM bible WHERE id <= 39";
            break;
          case "New Testament":
            query = "SELECT DISTINCT book_name FROM bible WHERE id > 39";
            break;
          case "All Books":
            query = "SELECT DISTINCT book_name FROM bible";
            break;
          default:
            query = "SELECT DISTINCT book_name FROM bible";
            break;
        }

        const result = await db.getAllSync(query);
        
        result.forEach((item) => {
          console.log(item);
          selection.push(item.book_name);
        });
      };

      fetchData();
