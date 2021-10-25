import axios from "axios";
/**
 * receber code(string)
 * recuperar o acess_token no github
 * verificar se o usuário existe no DB
 * ----sim = gerar um token
 * ----nao = criar no DB, gerar um token
 * retornar o token com as infos do user
 */

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  }
}

export { AuthenticateUserService };
