import * as yup from 'yup';

const schema = yup.object().shape({
    lastName: yup.string().required('Фамилия обязательна'),
    firstName: yup.string().required('Имя обязательно'),
    middleName: yup.string(),
    email: yup.string().email('Неверный формат электронной почты').required('Электронная почта обязательна'),
    phone: yup.string().required('Телефон обязателен').matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Неверный формат телефона')
});