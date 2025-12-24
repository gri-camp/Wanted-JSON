const Requests = {
  getEntities: (endpoint) => `
<code>const getEntities = <span class='danger'>async</span>(<span class='success'>endpoint</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>\`, {

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

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>?<span class='success'>\${qs}</span>\`, {
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

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>?q=<span class='success'>\${q}</span>\`, {
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

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>\`, {

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

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {

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
  getSingleEntity: (endpoint) => `
<code>const getSingleEntity = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>id</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>/<span class='success'>\${id}</span>\`, {            
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

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>\`, {
            
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
  signin: (endpoint = "") => `
<code>const signIn = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>body</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>\`, {
            
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
    
signIn(<span class='success'>'signin'</span>, <span class='success'>{login: 'foo', password: 'bazz'}</span>)
</code>`,
  logout: (endpoint = "") => `
<code>const logout = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>accessToken</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>\`, {
            
            method: 'POST',

            headers: {
                "Content-Type": "application/json",

                "Authorization": \`Bearer <span class='success'>\${accessToken}</span>\`,
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
    
logout(<span class='success'>'logout'</span>, <span class='success'>accessToken</span>)
</code>`,
  refresh: (endpoint = "") => `
<code>const refresh = <span class='danger'>async</span>(<span class='success'>endpoint</span>, <span class='success'>refreshToken</span>) => {

    <span class='danger'>try</span> {

        <span class='danger'>let</span> res = <span class='danger'>await</span> <span class='primary'>fetch</span>(\`https://hostname/<span class='success'>\${endpoint}</span>\`, {
            
            method: 'POST',

            headers: {
                "Content-Type": "application/json",

                "Authorization": \`Bearer <span class='success'>\${refreshToken}</span>\`,
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
    
refresh(<span class='success'>'refresh'</span>, <span class='success'>refreshToken</span>)
</code>`,
};

export { Requests };
