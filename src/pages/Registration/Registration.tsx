import { Link } from "react-router-dom";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI/";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
    userpassword: string,
    username: string,
    usermail: string
}

const loginFormScheme = yup.object({
    userpassword: yup.string().required("Обязателньное поле").min(8, "Минимум 8 символов"),
    username: yup.string().required("Обязателньное поле").min(3, "Минимум 3 символов"),
    usermail: yup.string().email("Введите почту в правильном формате").required("Обязателньное поле")

})

export const Registration: React.FC = () => {

const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormScheme),
    defaultValues: { userpassword: "", username: "", usermail: "" }
    })

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data);

    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                        <Input
                            isError={errors.username ? true : false}
                            errorMessage={errors.username?.message}
                            type="text"
                            placeholder="Имя пользователя"
                            {...field} />
                    )} />
                <Controller
                    name="usermail"
                    control={control}
                    render={({ field }) => (
                        <Input
                            isError={errors.usermail ? true : false}
                            errorMessage={errors.usermail?.message}
                            type="text"
                            placeholder="Почта"
                            {...field} />
                    )} />
                <Controller
                    name="userpassword"
                    control={control}
                    render={({ field }) => (
                        <Input
                            isError={errors.userpassword ? true : false}
                            errorMessage={errors.userpassword?.message}
                            type="password"
                            placeholder="Пароль"
                            {...field} />
                    )} />
                <Button type="submit" text="Зарегистрироваться" />
            </form>
            <div>
            <span>Уже есть аккаунт? </span>
                <Link to="/login">Войти</Link>
            </div>
            <div>
                <a href="#">Забыли пароль?</a>
            </div>
        </div>
    );
};