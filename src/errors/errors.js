import { requestLimitData } from "../models/models.js";

const Errors = {
  getEntities: `
<code><strong class='purple'>{</strong> 
    statusCode: 400,
    message: '<span class='danger'>сообщение ошибке...</span>',
    timestamp: "2025-11-25T09:02:34.843Z",
    path: "<span class='danger'>/\${endpoint}</span>", ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>`,
  getEntitiesQS: `
<code><strong class='purple'>{</strong> 
    statusCode: 400,
    message: '<span class='danger'>Ошибка валидации данных</span>',
    timestamp: "2025-11-25T09:02:34.843Z",
    path: "<span class='danger'>/\${endpoint}?limit=foo&page=bazz</span>",
    errors: <span class='purple'>[</span>"page must be an integer number","limit must be an integer number"<span class='purple'>]</span>, ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>
`,
  getSingleEntity: `
<code><strong class='purple'>{</strong> 
    statusCode: 400,
    message: '<span class='danger'>Entity with ID 999 not found</span>',
    timestamp: "2025-11-25T09:02:34.843Z",
    path: "<span class='danger'>/\${endpoint}/\${id}</span>",
    errors: "Not Found", ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>`,
  getSearchedEntity: `
<code>// При неудачном поиске - возвращается пустой массив   

<strong class='purple'>{</strong>  
    data:[], // <span class='danger'>пустой массив, ошибки нет!</span>   
    page:1,
    limit:0,
    total:0,
    totalPages:1, ${requestLimitData()}
<strong class='purple'>}</strong>
</code>`,
  addEntity: `
<code><strong class='purple'>{</strong>    
    statusCode: 400,
    message: '<span class='danger'>Ошибка валидации данных</span>',
    errors: <span class='purple'>[</span> ошибка 1, ошибка 2, ..., ошибка N <span class='purple'>]</span>,
    timestamp: "2025-11-25T09:02:34.843Z",
    path: "<span class='danger'>/\${endpoint}</span>", ${requestLimitData()}
<span class='purple'>}</strong>
</code>`,
  deleteEntity: `
<code><strong class='purple'>{</strong> 
    statusCode: 400,
    message: '<span class='danger'>Entity with ID 999 not found</span>',
    timestamp: "2025-11-25T09:02:34.843Z",
    path: "<span class='danger'>/\${endpoint}/\${id}</span>",
    errors: "Not Found", ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>
`,
  updateEntity: `
<code><strong class='purple'>{</strong> 
    statusCode: 400,
    message: 'Ошибка валидации данных',
    timestamp: "2025-11-25T09:02:34.843Z",
    path: "<span class='danger'>/\${endpoint}/\${id}</span>",
    errors: <span class='purple'>[</span>"property <strong>foo</strong> should not exist"<span class='purple'>]</span>, ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>
`, 
  fakeSignin: `
<code><strong class='purple'>{</strong> 
    "statusCode": 401,
    "message": "Пользователь не найден или срок действия токена истек. Зарегистрируйтесь.",
    "timestamp": "2026-03-29T11:35:32.497Z",
    "path": "/fakeAuth/signin",
    "errors": "Unauthorized", ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>
`,
  fakeSignup: `
<code><strong class='purple'>{</strong> 
    "statusCode": 409,
    "message": "Логин уже занят",
    "timestamp": "2026-03-29T11:32:19.389Z",
    "path": "/fakeAuth/signup",
    "errors": "Conflict", ${requestLimitData()}
<strong class='purple'>}</strong>           
</code>
`,
};

export { Errors };
