import { API_CONSTS } from "../models/models.js";

const Requests = {
  getEntities: (endpoint) => `
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const getEntities = <span class='danger'>async</span>(<span class='success'>endpoint</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>\`, {

            headers: {
                
                "Content-Type": "application/json",

                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
            },
        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}
    
getEntities(<span class='success'>'${endpoint}'</span>);
</code>`,
  getEntitiesQS: (endpoint) => `  
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const getEntities = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>qs</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>?<span class='success'>\${qs}</span>\`, {
            headers: {

                "Content-Type": "application/json",
                
                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
            },
        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}
    
getEntities(<span class='success'>'${endpoint}'</span>, <span class='success'>'page=2&limit=5'</span>);
</code>`,
  getSearchedEntity: (endpoint) => `  
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const getSearchedEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>q</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>?q=<span class='success'>\${q}</span>\`, {
            headers: {

                "Content-Type": "application/json",  
                
                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
            },
        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}
    
getSearchedEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>searchValue</span>);
</code>`,
  addEntity: (endpoint) => `
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const addEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>\`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json", 
                
                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
            },

            body: JSON.stringify(<span class='success'>body</span>),

        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}    

addEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>newEntity</span>);
</code>`,
  deleteEntity: (endpoint) => `
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const deleteEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {

            method: "DELETE",

            headers: {

                "Content-Type": "application/json",
                
                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
            }  

        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}
    
deleteEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>6</span>)
</code>`,
  updateEntity: (endpoint, styles = "") => `
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const updateEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {

            method: "PATCH",

            headers: {

                "Content-Type": "application/json",   
                
                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
            },

            body: JSON.stringify(<span class='success'>body</span>),  

        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}
    
updateEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>6</span>, <span class='success'>changedData</span>)
</code>`,
  getSingleEntity: (endpoint, styles = "") => `  
<code>const <span class='danger'>accessToken</span> = localStorage.getItem('access_token');

const getSingleEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {            
            headers: {

                "Content-Type": "application/json",
                
                "Authorization": \`Bearer <span class='danger'>\${accessToken}</span>\`,
                
            }            
        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}
    
getSingleEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>2</span>)
</code>`, 
  fakeSignup: (endpoint = "") => `
<code> // <strong><span class="danger">&#10071;</span>Важно. Пароль должен быть не короче 6 символов </strong>

const fakeSignUp = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

    <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/${API_CONSTS.FAKE_AUTH}/<span class='success'>\${endpoint}</span>\`, {
            
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(<span class='success'>body</span>),        
        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}

fakeSignUp(<span class='success'>'signup'</span>, <span class='success'>{login: 'foo', password: '12345678'}</span>) 
</code>`,  
  fakeSignin: (endpoint = "") => `
<code>const fakeSignIn = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/${API_CONSTS.FAKE_AUTH}/<span class='success'>\${endpoint}</span>\`, {
            
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(<span class='success'>body</span>),        
        });

        <span class='danger'>if</span> (!res.<span class='primary'>ok</span>) {
            <span class='danger'>throw new</span> <span class='purple'>Error</span>('Something went wrong...');
        }

        <span class='danger'>return</span> <span class='danger'>await</span> res.<span class='primary'>json()</span>;
    } 

    <span class='danger'>catch</span> (e) { 

        <span class='danger'>return</span> e.message;

    }
}

fakeSignIn(<span class='success'>'signin'</span>, <span class='success'>{login: 'foo', password: '12345678'}</span>)  
</code>`,
};

export { Requests };
