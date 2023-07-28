### Giải thích cấu trúc source:
- Source được build bằng CRA

| Thư mục   | Chức năng     |
| :-------- | :-------------|
| assets | Lưu trữ các cài đặt tĩnh như ảnh, font, các định dạng file css tĩnh      |
| components |Lưu trữ các common component dùng chung |
| configs | Lưu trữ các config của các thư viện (Hiện tại có Axios / I18n) |
| constants | Lưu trữ các file khai báo các hằng số |
| screens | Lưu trữ các folder theo tên màn hình |
| stores | Lưu trữ các cài đặt của redux - source sử dụng [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started) |
| .eslintrc.js / .prettierrc / .editorconfig | config linter code / format code ts, tsx / format editor để đồng bộ 3 chức năng này theo hệ điều hành |
| config-overrides.js | File để tuỳ biến cấu hình webpack mặc định của CRA |

- Source viết bằng Typescript - Ưu tiên sử dụng typescript (có cho phép allowJS ở tsconfig)
- Đa số các configs code style / code convention đều là mặc định của thư viện

### Quy tắc đặt tên
- Tên biến/Tên file có ý nghĩa
- Tên folder camelCase, tên file function/hook/constant camelCase. Tên component/provider in hoa chữ cái đầu của mỗi từ. Không viết code sử lý trong file index.ts / index.tsx

### Nguyên tắc Merge Request
- Hạn chế sửa .eslintrc / không eslint-disable-next-line nếu chưa cần thiết
- 1 pull request chỉ có 1 commit
- 1 pull request không vượt quá 20 file
- Trong file component hở ra giữa các phần logic/style cho dễ nhìn
- Thứ tự import: Các Thư viện <hở 1 dòng> Các Component <hở 1 dòng> Các common function <hở 1 dòng> Style css/scss/styled & Image
- Không style inline / thừa thẻ đóng / đảm bảo log build không có error, warning

### Để chạy
- Clone source and run yarn install in source code
- Create file .env look like .env.example
- Run: yarn dev