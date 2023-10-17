export default async (req, res) => {
    try {
        const { name, tel } = JSON.parse(req.body)
        const msg = `<b>Тебе пришел заказ:)</b> \n<b>Имя</b>: ${name} \n<b>Телефон</b>: ${tel}`
        const msgEncode = encodeURI(msg)

        const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT}&parse_mode=html&text=${msgEncode}`)

        if (!response.ok) throw res
        res
            .status(200)
            .json({ status: "ok", message: "Успешно отправлено!" })
    }
    catch (error) {
        res
            .status(500)
            .json({
                status: "error",
                message: "Произошла ошибка! " + error.message || JSON.stringify(error),
            })
    }
}
