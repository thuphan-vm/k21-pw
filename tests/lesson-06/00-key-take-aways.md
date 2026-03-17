# Typescript
- TypeScript (TS) là Javascript cải tiến, thêm kiểu dữ liệu để code rõ ràng hơn
- Giúp phát hiện lỗi ngay khi viết code (ví dụ: gán sai kiểu dữ liệu)
- TS được biện dịch thành JS để chạy
- Ví dụ: 
``` typescript
    let age: number = 25; // Phải là số
    let name: string = "John"; // Phải là chuỗi
    let teams: string[] = ["Team A", "Team B"]; // Mảng chuỗi
    // age = "30"; // Lỗi: TS báo không thể gán chuỗi cho số
```

- Interface trong TypeScript
    - Interface định nghĩa cấu trúc cho đối tượng 
    - Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu
    - Ví dụ: 
    ``` typescript
        interface Player {
            name: string;
            position: string;
            jerseyNumber: number;
        }
        let player: Player = { name: "John", position: "Forward",
        jerseyNumber: 10 };
    ```
- Class: trong TS giống JS nhưng có thêm **khai báo kiểu dữ liệu** cho thuộc tính và phương thức
    - Ví dụ:
    ``` typescript 
    class Team {
        name: string;
        players: Player[];

        constructor(name: string) {
            this.name = name;
            this.players = [];
        }

        addPlayer(player: Player): void {
            this.players.push(player);
            }
        }
     ```
- Run TS: 
    - `npx ts-node <path_file`
    - `npx tsx <path_file>  `