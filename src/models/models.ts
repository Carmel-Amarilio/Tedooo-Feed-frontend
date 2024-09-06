export interface Feed {
    id: string;
    userId: string;
    username: string;
    avatar: string;
    shopName: string;
    shopId: string;
    images: string[];
    comments: number;
    date: string
    text: string
    likes: number
    didLike: boolean
    premium: boolean
}


// {
//     "id": "6318751da037be08c3b94046",
//     "userId": "6282267febfcb07f771359c7",
//     "username": "craftyfun",
//     "avatar": "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
//     "shopName": "Crafts ideas",
//     "shopId": "628227cdebfcb07f771359ce",
//     "images": [
//       "https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"
//     ],
//     "comments": 263,
//     "date": "2022-09-06T14:40:29.347Z",
//     "text": "Upload the last 3 pictures of handmade items you’ve made or bought!",
//     "likes": 2142,
//     "didLike": false,
//     "premium": true
//   }