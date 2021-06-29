import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {login, password})
    }

    static async registration(login: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {login, email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

}

