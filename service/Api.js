import { getDataFromLS } from "../helpers/helpers.js";
import { API_CONSTS } from "../models/models.js";

class Api {
  static async getEntities(endpoint, qs = "") {
    try {
      const accessToken = getDataFromLS("user")?.accessToken;
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${endpoint}?${qs}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async getSingleEntity(endpoint, id = "") {
    try {
      const accessToken = getDataFromLS("user")?.accessToken;
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${endpoint}/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async getSearchedEntity(endpoint, q) {
    try {
      const accessToken = getDataFromLS("user")?.accessToken;
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${endpoint}?q=${q}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async addEntity(endpoint, body) {
    try {
      const accessToken = getDataFromLS("user")?.accessToken;
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(body),
        },
      );
      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async deleteEntity(endpoint, id) {
    try {
      const accessToken = getDataFromLS("user")?.accessToken;
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${endpoint}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async updateEntity(endpoint, id, body) {
    try {
      const accessToken = getDataFromLS("user")?.accessToken;
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${endpoint}/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(body),
        },
      );

      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }

      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async signup(body, endpoint = "signup") {
    try {
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );

      if (!res.ok) {
        const mess = (await res.json())?.message;
        throw new Error(mess);
      }

      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async signin(body, endpoint = "signin") {
    try {
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        },
      );

      if (!res.ok) {
        const mess = (await res.json())?.message;
        throw new Error(mess);
      }

      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async logout(accessToken, endpoint = "logout") {
    try {
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        const mess = await res.json();
        throw new Error(mess);
      }

      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async refresh(endpoint = "refresh") {
    try {
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.AUTH}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        const mess = (await res.json())?.message;
        throw new Error(mess);
      }

      return await res.json();
    } catch (e) {
      return e.message;
    }
  }

  static async fakeSignIn(endpoint, body) {
    try {
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.FAKE_AUTH}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }
  static async fakeSignUp(endpoint, body) {
    try {
      let res = await fetch(
        `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.FAKE_AUTH}/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      if (!res.ok) {
        const mess = await res.text();
        throw new Error(mess);
      }
      return await res.json();
    } catch (e) {
      return e.message;
    }
  }
}

export default Api;

// Успешный ответ -------
