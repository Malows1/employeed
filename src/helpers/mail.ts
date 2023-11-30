import emailjs from '@emailjs/browser';
export const sendEmail = async ({name}: any) => {
    try {

        await emailjs.send(
            'service_kfunb5g',
            'template_htruiid',
            { 'email': 'joseph.miana.c@gmail.com', 'message': 'Hello', 'from_name': name },
            'LXtFt1PGcyLMMhpI0'
        )
    } catch (error: any) {
        throw new Error(error.message)
    }
}
