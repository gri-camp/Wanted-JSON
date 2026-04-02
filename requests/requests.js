import { API_CONSTS } from "../models/models.js";

const Requests = {
  getEntities: (endpoint) => `
<code>const getEntities = <span class='danger'>async</span>(<span class='success'>endpoint</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>\`, {

            headers: {
                "Content-Type": "application/json",
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
<code>const getEntities = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>qs</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>?<span class='success'>\${qs}</span>\`, {
            headers: {
                "Content-Type": "application/json",
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
<code>const getSearchedEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>q</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>?q=<span class='success'>\${q}</span>\`, {
            headers: {
                "Content-Type": "application/json",
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
<code>const addEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>\`, {

            method: "POST",

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

addEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>newEntity</span>);
</code>`,
  deleteEntity: (endpoint) => `
<code>const deleteEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {

            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
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
<code>const updateEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {

            method: "PATCH",

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
    
updateEntity(<span class='success'>'${endpoint}'</span>, <span class='success'>6</span>, <span class='success'>changedData</span>)
</code>`,
  getSingleEntity: (endpoint, styles = "") => `
<code>const getSingleEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {            
            headers: {
                "Content-Type": "application/json",
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
  signup: (endpoint = "") => `
<code>const signUp = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/<span class='success'>\${endpoint}</span>\`, {    
            
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
    
signUp(<span class='success'>'signup'</span>, <span class='success'>{login: 'foo', password: 'bazz'}</span>)
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

  signin: (endpoint = "") => `
<code>const signIn = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/<span class='success'>\${endpoint}</span>\`, {

            method: 'POST',

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(<span class='success'>body</span>), 
            
            credentials: "include",
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

signIn(<span class='success'>'signin'</span>, <span class='success'>{login: 'foo', password: 'bazz'}</span>)
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
  logout: (endpoint = "") => `
<code>const logout = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>accessToken</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/<span class='success'>\${endpoint}</span>\`, {
            
            method: 'POST',

            headers: {
                "Content-Type": "application/json",

                "Authorization": \`Bearer <span class='success'>\${accessToken}</span>\`,
            },

            credentials: "include",
                    
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
    
logout(<span class='success'>'logout'</span>, <span class='success'>accessToken</span>)
</code>`,
  refresh: (endpoint = "") => `
<code>const refresh = <span class='danger'>async</span>(<span class='success'>endpoint='refresh'</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/<span class='success'>\${endpoint}</span>\`, {
            
            method: "POST",

            headers: {
                "Content-Type": "application/json",               
            },
            
            credentials: "include",
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
    
refresh()
</code>`,
};

export { Requests };
