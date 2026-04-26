export default {
    name: "sewa",
    type: 'main',
    desc: "list harga sewa :D",
    aliases: ["buypremium", "donasi", "buyvip", "sewa", "sewabot","rent"],
    execute: async ({ hisoka, m, command }) => {
        let text = `
${!/donate|donasi/i.test(command) ? `⭔ *Harga Premium :*

- Rp. 20.000 / $ 1,40 (30 day) 
- Rp. 35.000 / $ 2,40 (50 day)
- Rp. 55.000 / $ 3,70 (70 day)
- Rp. 85.000 / $ 5,30 (100 day)

⭔ *Harga Sewa :*

- Rp. 30k / $ 2 (30 day)
- Rp. 45k / $ 3 (50 day)
- Rp. 65k / $ 4,30 (70 day)
- Rp. 95k / $ 6,30 (100 day)

Untuk Pembayaran Melalui Pulsa +5k / $ 0,40

-
-Detail chat owner https://wa.me/50948038775` : `OWNER PRINCE YXZ :) :

- PRINCE : 50948038775
- JON : XXXXXXXX

Minat Premium? https://wa.me/50948038775?text=Min%20Info%20Premium`}
        `
        hisoka.sendMessage(m.from, "./temp/qris-hisoka.jpeg", { quoted: m, caption: text })
    }
}
