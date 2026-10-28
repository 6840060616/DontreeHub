// 50 REAL INSTRUMENTS DATASET (10 ITEMS PER CATEGORY)
const products = [
    // GUITARS (10 items)
    { id: 1, cat: 'guitar', name: 'Fender Player Stratocaster', desc: 'กีตาร์ไฟฟ้ามาตรฐานโลก คอทรง Modern C เสียงใสทรงพลัง', price: '฿26,176', url: 'https://nafiriguitar.com/th/products/fender-player-series-stratocaster-plus-top-tobacco-sunburst?srsltid=AYCX9vKBP6YbMW5yOSirn_FC7-qk19NqZZlm86SQsqHXhuuw1gS9BnHy', img: 'https://nafiriguitar.com/cdn/shop/products/200116152913_Fender_20Player_20Strat_20PLus_20Top_ori.jpg?v=1708524189&width=1445', },
    { id: 2, cat: 'guitar', name: 'Gibson Les Paul Standard 60s', desc: 'โทนเสียงอบอุ่น ทรงพลังด้วยปิ๊กอัพ Burstbucker 61', price: '฿81,545', url: 'https://nafiriguitar.com/th/products/gibson-lp-standard-60s-figured-top-60s-cherry-w-case?srsltid=AYCX9vLPQvzFCt-OxPlrmzuEgIkiBiLcXbe3CUNhbfV4RuJlLLaHkUHY', img: 'https://nafiriguitar.com/cdn/shop/files/A564575C-637E-4285-A4BA-FE36D3E5670E.jpg?v=1760884719&width=1946', badge: '' },
    { id: 3, cat: 'guitar', name: 'Ibanez RG550 Genesis', desc: 'กีตาร์สายร็อค/เมทัล คอบางเล่นง่าย พร้อมคันโยก Edge Tremolo', price: '฿41,128', url: 'https://waltgracevintage.com/products/ibanez-genesis-collection-rg550-electric-guitar-electric-blue', img: 'https://waltgracevintage.com/cdn/shop/files/IMG_2592_84eb891d-d6b3-416c-921b-b5185ce164c6.jpg?v=1774926724', badge: '' },
    { id: 4, cat: 'guitar', name: 'PRS SE Custom 24', desc: 'ดีไซน์สวยงาม ไม้เฟรมเมเปิ้ล ให้โทนเสียงหลากหลายกว้างขวาง', price: '฿20,339', url: 'https://nafiriguitar.com/th/products/prs-se-ce-24-bolt-on-in-charcoal-burst?srsltid=AYCX9vJKymcOFWDj6zhPDYyOsS32jZ3o1EbYjG7ApiJAwfxZfqxK0_yv', img: 'https://nafiriguitar.com/cdn/shop/files/F53D4648-4F0E-4562-B291-DCE367B5FD75.jpg?v=1768975215&width=1346', badge: '' },
    { id: 5, cat: 'guitar', name: 'Taylor 214ce Acoustic-Electric', desc: 'กีตาร์โปร่งไฟฟ้าเสียงใสนุ่มลึก บอดี้ทรง Grand Auditorium', price: '฿51,035', url: 'https://nafiriguitar.com/th/products/taylor-214ce-sb-deluxe-acoustic-electric-in-tobacco-sunburst?srsltid=AYCX9vKn8-fMMaMP0VwiH_Lb1gcaAV70jx_QBcykJZ5IlcMBq4bMbDN3', img: 'https://nafiriguitar.com/cdn/shop/products/220628174946_Antique_20SB_20_1__ori.jpg?v=1708500688', badge: '' },
    { id: 6, cat: 'guitar', name: 'Martin D-28 Standard', desc: 'กีตาร์โปร่งระดับตำนาน ให้เสียงเบสลึกนุ่มทรงพลัง', price: '฿119,956', url: 'https://roundhillmusicco.com/products/martin-d-28-standard-natural?srsltid=AYCX9vKVpUcEEKCXhGZd3hpHE2sLKtn4RKprSGlvjfzqLEuEGSwfwdn_', img: 'https://roundhillmusicco.com/cdn/shop/files/RHG384-6.jpg?v=1786119710', badge: '' },
    { id: 7, cat: 'guitar', name: 'Yamaha FG800 Acoustic', desc: 'กีตาร์โปร่งยอดนิยมสำหรับผู้เริ่มต้น ไม้หน้าแท้ Solid Spruce', price: '฿18,165', url: 'https://www.musicstreet.co.uk/products/yamaha-fg800-black', img: 'https://www.musicstreet.co.uk/cdn/shop/products/yamaha-acoustic-guitar-yamaha-fg800-black-29153744846909.jpg?v=1774572809&width=1200', badge: '' },
    { id: 8, cat: 'guitar', name: 'Epiphone Les Paul Standard 50s', desc: 'คุณภาพใกล้เคียง Gibson ในราคาย่อมเยา ไม้มาฮอกกานีแท้', price: '฿19,593', url: 'https://nafiriguitar.com/th/products/epiphone-les-paul-standard-50s-figured-in-seafoam-green?srsltid=AYCX9vJM4ZXlnyNzQFTYr8MXYkniH9D-enpP1ayG-xBFqffnpuMe5Iah', img: 'https://nafiriguitar.com/cdn/shop/files/FullSizeRender_d442b1b3-2922-45c6-b25b-d5fe8962c2b1.jpg?v=1738477075&width=1445', badge: '' },
    { id: 9, cat: 'guitar', name: 'ESP LTD EC-1000', desc: 'ดุดันสะใจคนชอบร็อคหนักๆ ด้วยปิ๊กอัพ EMG Active', price: '฿36,387', url: 'https://nafiriguitar.com/th/products/esp-ltd-ec-1000-electric-guitar-see-thru-black-cherry?srsltid=AYCX9vL5LyRROX1xPs-sA5qfeZt1T3KsQChaqKxYthL8epUhEDapRlzJ', img: 'https://nafiriguitar.com/cdn/shop/files/72F3B373-A860-43E3-ADA0-04367D36A559.jpg?v=1742550378&width=1346', badge: '' },
    { id: 10, cat: 'guitar', name: 'Fender Player Precision Bass', desc: 'เบสไฟฟ้าเสียงแน่นลึก มาตรฐานของวงดนตรีทั่วโลก', price: '฿36,200', url: 'https://nafiriguitar.com/th/products/fender-player-ii-precision-bass-guitar-rw-fb-in-3-tone-sunburst?srsltid=AYCX9vKL1eR0zSsaFGxV_7VxGV1AfGHcmWenRH6gCAlzJpQtSz0WMQwJ', img: 'https://nafiriguitar.com/cdn/shop/files/7923DE25-DD26-4FEA-ABD7-4C2B89875EED.jpg?v=1727864873&width=1946', badge: '' },

    // PIANO & KEYBOARDS (10 items)
    { id: 11, cat: 'piano', name: 'Yamaha P-125 Digital Piano', desc: 'เปียโนไฟฟ้า 88 คีย์ ทัชชิ่งใกล้เคียงเปียโนจริง พกพาง่าย', price: '฿32,900', url: 'https://th.yamaha.com/th/musical-instruments/pianos/products/p-series/p-125/', img: 'https://th.yamaha.com/th/files/fe_fig07_tcm150-1629914.jpg?impolicy=resize&imwid=805&imhei=604/photo-1520523839897-bd0b52f945a0?w=500&q=80', badge: '' },
    { id: 12, cat: 'piano', name: 'Roland FP-30X Digital Piano', desc: 'ระบบคีย์ PHA-4 Standard พร้อมเสียงลำโพงกระหึ่มสมจริง', price: '฿21,958', url: 'https://kraftmusic.com/products/roland-fp-30x-digital-piano-black?srsltid=AYCX9vJPCs5opR17uCd8Vi1aPsuT6L0RcSWTSYfPxNc-uZP1wz5YoGNE/products/roland-fp-30x-digital-piano-black?srsltid=AYCX9vJPCs5opR17uCd8Vi1aPsuT6L0RcSWTSYfPxNc-uZP1wz5YoGNE', img: 'https://kraftmusic.com/cdn/shop/files/ROL-FP30X_Style-Shots-14.jpg?v=1770225537&width=3000/photo-1552422535-c45813c61732?w=500&q=80', badge: '' },
    { id: 13, cat: 'piano', name: 'Kawai ES920 Portable Piano', desc: 'คีย์ Responsive Hammer III ให้สัมผัสเปียโนแกรนด์', price: '฿62,987', url: 'https://kraftmusic.com/products/kawai-es920-portable-digital-piano-black-home-essentials-bundle?srsltid=AYCX9vLsZ2PzDBTK0DcTVbmqf69VNFrwfMF8EJJY6zzFU0az4adbray4', img: 'https://kraftmusic.com/cdn/shop/files/Kawai_ES920_Style-12_99769091-6089-4ff5-84dc-b1785e284110.jpg?v=1767819023&width=4000/photo-1571974599782-87624638275e?w=500&q=80', badge: '' },
    { id: 14, cat: 'piano', name: 'Nord Stage 4 88', desc: 'คีย์บอร์ดและซินธิไซเซอร์ระดับเวที คอนเสิร์ตระดับโลกเลือกใช้', price: '฿ 153,013', url: 'https://nafiriguitar.com/th/products/nord-synthesizer-keyboard-stage-4-88-stage?srsltid=AYCX9vJqcYWJlGEt3GUMWyAvprAUA5afYxEDzl_4gX6L-v463jG_36Pg', img: 'https://nafiriguitar.com/cdn/shop/files/230CE9B8-44DF-41DE-8CA5-7EEC1382AC1F.jpg?v=1765423713&width=1946/photo-1598488035139-bdbb2231ce04?w=500&q=80', badge: '' },
    { id: 15, cat: 'piano', name: 'Casio Privia PX-S1100', desc: 'เปียโนไฟฟ้าที่ดีไซน์บางที่สุดในโลก หรูหราทันสมัย', price: '฿28,900 ', url: 'https://www.musicarms.net/casio-px-s1100/', img: 'https://www.musicarms.net/wp-content/uploads/2021/11/pxs1100-08.jpeg/photo-1520523839897-bd0b52f945a0?w=500&q=80', badge: '' },
    { id: 16, cat: 'piano', name: 'Korg SV-2 Vintage Piano', desc: 'ซาวด์วินเทจสไตล์ Stage Piano รวบรวมเสียงเปียโนระดับตำนาน', price: '฿77,674', url: 'https://korgusshop.com/products/sv288r?srsltid=AYCX9vL8rtmu9s42h-OEPdYMjb-kiwkPtFsNIM3lnH50z9TePKcE6Dp7', img: 'https://korgusshop.com/cdn/shop/files/SV2-Black_04.jpg?v=1726761275&width=5760/photo-1552422535-c45813c61732?w=500&q=80', badge: '' },
    { id: 17, cat: 'piano', name: 'Yamaha Clavinova CLP-735', desc: 'เปียโนไฟฟ้าทรงตู้โฮมสตูดิโอ สัมผัสและเสียงเปียโนระดับพรีเมียม', price: '฿70,000', url: 'https://th.yamaha.com/th/musical-instruments/pianos/products/clavinova/clp-735/', img: 'https://th.yamaha.com/th/files/ov-03_tcm150-2395437.jpg?impolicy=resize&imwid=750&imhei=501/photo-1571974599782-87624638275e?w=500&q=80', badge: '' },
    { id: 18, cat: 'piano', name: 'Moog Subsequent 37 Synthesizer', desc: 'อนาล็อกซินธิไซเซอร์ระดับตำนาน เสียงเบสและลีดแน่นลึก', price: '฿89,900', url: 'https://www.musicarms.net/moog-subsequent-37/', img: 'https://www.musicarms.net/wp-content/uploads/2025/06/Moog-Subsequent-37-side.jpg/photo-1598488035139-bdbb2231ce04?w=500&q=80', badge: '' },
    { id: 19, cat: 'piano', name: 'Roland JUNO-DS61 Synthesizer', desc: 'ซินธิไซเซอร์พกพาง่าย น้ำหนักเบา ขวัญใจวงดนตรีเล่นสด', price: '฿36,357', url: 'https://www.ebay.com/itm/800773594798?chn=ps&norover=1&mkevt=1&mkrid=711-167022-189232-7&mkcid=2&itemid=800773594798&targetid=325425753764&device=c&mktype=pla&googleloc=9194951&poi=&campaignid=20436423056&mkgroupid=155902176887&rlsatarget=pla-325425753764&abcId=&merchantid=5857749791&gad_source=1&gad_campaignid=20436423056&gbraid=0AAAAAD_QDh-lq9LhvqJGP9jaSf2V_wH6B&gclid=CjwKCAjwl4HXBhAjEiwAHlpWhCRogsZVpyGj4Kv4uOfkwd1qCeYJbeQwHPvzFu6O2gSx0a8GLr5KGBoCf98QAvD_BwE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtajLNXdRHPF24GYsMPCTjEUbQ5k-STaSmJHm5wYIZdBmQV58K_vTDbUs&s=10/photo-1520523839897-bd0b52f945a0?w=500&q=80', badge: '' },
    { id: 20, cat: 'piano', name: 'Steinway & Sons Model D Grand Piano', desc: 'สุดยอดแกรนด์เปียโนระดับตำนานโลกแห่งเสียงดนตรีคลาสสิก', price: '฿218,000', url: 'https://shopee.co.th/product/129730679/8335468299?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaBRvcqdZwgRklGTWoHoxFGhRfNAexxPkhN1n8rcCO5qFEud_-aY2hsGdfUnqCpX0P0Z7lpJy6IP6_Ew8qmNpcGhlcnRleHTEbwAAAAw76qNPCffH_dDuQb7Qrw5Xc7U98vsb82b3SuGbaLO4ieuapospKQ74RbOfowcJwSISWMMwJBR5jJOtsMS98jE9D_pMfRq_Dzu5R81qjHyVN8L9BjXTeembErwNMVKUo32H20xMgJrwPYaVyw&utm_source=google&utm_medium=seller&utm_campaign=s129730679_ss_TH_GMAX_TestCampaign_sc&is_seller=true&gad_source=1&gad_campaignid=22450490817&gbraid=0AAAAA_ZI8MY-nDNhjOdKqjLKWJJqfy0S3&gclid=CjwKCAjwl4HXBhAjEiwAHlpWhLnr2R30W8nCW41b_YMWW41O34to_3l5XfgszAp1qtALrkCZs8BJAhoCw5YQAvD_BwE', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxCN1v9hYp7ZC90sZbUlr5TYH9KfjeHSmlHQYzJ_-m_Yh_3dA046e9egW1Itcw71N7BU1mYTyYVbfDViUJrLCPYPBGtMCvVJau_W1-UPSqesAhUOgBXkcTcFEj12mez_tvnL8BGY_Rbg&usqp=CAc/photo-1598488035139-bdbb2231ce04?w=500&q=80', badge: '' },

    // DRUMS & PERCUSSION (10 items)
    { id: 21, cat: 'drums', name: 'Pearl EXPORT EXX 5 pcs', desc: 'ชุดกลองชุดอคูสติกขายดีที่สุดตลอดกาล เนื้อไม้ Poplar/Mahogany', price: '฿34,000', url: 'https://www.musicarms.net/pearl-export-exx/', img: 'https://www.musicarms.net/wp-content/uploads/2014/09/Pearl-EXX-%E0%B8%94%E0%B8%B3.jpg', badge: '' },
    { id: 22, cat: 'drums', name: 'Roland TD-17KVX Electronic Drum', desc: 'กลองไฟฟ้าหนังมุ้ง สัมผัสสมจริง รองรับ Bluetooth ในตัว', price: '฿64,000', url: 'https://www.musicarms.net/roland-td-17-kvx-%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A0%E0%B8%B2%E0%B8%9E/', img: 'https://www.musicarms.net/wp-content/uploads/2018/05/Roland-TD-17KVX-%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2-1.jpg', badge: '' },
    { id: 23, cat: 'drums', name: 'Tama Imperialstar 5pcs with Hardware', desc: 'ชุดกลองครบเซ็ตพร้อมฉาบ MeiNL พร้อมเล่นสำหรับมือใหม่ถึงโปร', price: '฿31,050', url: 'https://upmusicstore.com/product/tama-imperialstar-5-pcs-w-hw/', img: 'https://upmusicstore.com/wp-content/uploads/2023/09/TAMA-ImperialStar-CoffeeTeakWrap.jpg', badge: '' },
    { id: 24, cat: 'drums', name: 'Yamaha DTX6K3-X E-Drum Kit', desc: 'โมดูล DTX-PRO ให้ไดนามิกเสียงกลองสมจริงระดับสตูดิโอ', price: '฿75,000', url: 'https://www.musicarms.net/%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2-yamaha-dtx6k3-x/', img: 'https://www.musicarms.net/wp-content/uploads/2021/03/Yamaha-DTX6K3-X.jpg', badge: '' },
    { id: 25, cat: 'drums', name: "DW Collector's Series Maple Kit", desc: 'กลองชุดระดับคัสตอมบิวท์ ทำจากไม้เมเปิ้ลเกรดพรีเมียม', price: '฿270,000', url: 'https://upmusicstore.com/product/dw-collectors-maple-mahogany-7-piece/', img: 'https://upmusicstore.com/wp-content/uploads/2024/10/Artboard-1_0_2_11zon.jpg', badge: '' },
    { id: 26, cat: 'drums', name: 'Alesis Nitro Max Kit', desc: 'กลองไฟฟ้าคีย์มุ้งราคาประหยัด ฟังค์ชันครบสำหรับซ้อมบ้าน', price: '฿14,900', url: 'https://upmusicstore.com/product/alesis-nitro-max/', img: 'https://upmusicstore.com/wp-content/uploads/2026/09/Alesis-Nitro-Max-Kit-03.jpg', badge: '' },
    { id: 27, cat: 'drums', name: 'Zildjian A Custom Cymbal Pack', desc: 'ชุดฉาบระดับมืออาชีพ เสียงใส คมพุ่ง ทะลุโน้ตดนตรี', price: '฿40,000', url: 'https://theeramusic.com/th/product/a-custom-cymbal-pack-a20579-11/', img: 'https://theeramusic.com/wp-content/uploads/2021/10/154.-A-CUSTOM-CYMBAL-PACK-A20579-11.jpg', badge: '' },
    { id: 28, cat: 'drums', name: 'Echoslap SS101', desc: 'คาฮอนไม้เนื้อดี เสียงเบสแน่น เสียงสแนร์คมชัด', price: '฿1,590', url: 'https://www.musicarms.net/%E0%B8%84%E0%B8%B2%E0%B8%AE%E0%B8%AD%E0%B8%99-ah-1/', img: 'https://www.musicarms.net/wp-content/uploads/2013/08/echoslap-ss01.jpg', badge: '' },
    { id: 29, cat: 'drums', name: 'Ludwig Classic Maple Snare', desc: 'สแนร์ระดับตำนาน ปากกว้าง เสียงตอบสนองไว คมชัด', price: '฿21,800', url: 'https://www.musicarms.net/ludwig-classic-maple-snare-drum-%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B9%81%E0%B8%99%E0%B8%A3%E0%B9%8C/', img: 'https://www.musicarms.net/wp-content/uploads/2024/08/Ludwig-Classic-Maple-Snare-Drum.jpg', badge: '' },
    { id: 30, cat: 'drums', name: 'Roland SPD-SX PRO Flagship Sampling Pad', desc: 'แผ่นเพอร์คัสชันไฟฟ้าสำหรับสายแสดงสด ใส่ไฟล์เสียงแซมเปิลได้', price: '฿44,000', url: 'https://www.musicarms.net/roland-spd-sx-pro/', img: 'https://www.musicarms.net/wp-content/uploads/2023/01/Roland-SPD-SX-PRO-Right.jpg', badge: '' },

    // WIND INSTRUMENTS (10 items)
    { id: 31, cat: 'wind', name: 'Yamaha YAS-280 Alto Saxophone', desc: 'แซกโซโฟนอัลโต มาตรฐานการเรียนการสอนทั่วโลก เป่าง่าย เสียงดี', price: '฿64,000', url: 'https://www.musicarms.net/yamaha-yas-280-alto-saxophone-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B8%E0%B8%81/', img: 'https://www.musicarms.net/wp-content/uploads/2015/04/Yamaha-YAS-280-Alto-Saxophone-1.jpg', badge: '' },
    { id: 32, cat: 'wind', name: 'Yamaha YBL-412G Bass Trombone', desc: 'ทรอมโบนเสียงเบสที่ให้ซาวด์ทุ้มหนักแน่น โดยใช้การดีไซด์มาจากรุ่น 830 ที่นักดนตรีทั่วโลกยกให้เป็นหนึ่งในเบสทรอมโบนยอดนิยม', price: '฿110,000', url: 'https://www.musicarms.net/yamaha-ybl-412g-bass-trombone/', img: 'https://www.musicarms.net/wp-content/uploads/2017/04/ybl-421g_540x540_540x540_3d8dac4036b501e6d05b58b0c870e962.jpg', badge: '' },
    { id: 33, cat: 'wind', name: 'Symphony JYTU-E170 Marching Tuba', desc: 'ทูบาคุณภาพที่ใช้กับวงดุริยางค์หรือวงมาร์ชชิ่ง เป็นเครื่องดนตรีคีย์ Bb ตัวทูบาทำจากทองเหลือง วาล์วคิวโปรนิกเกิล เคลือบสีเงินสวยงาม', price: '฿78,500', url: 'https://www.musicarms.net/symphony-jytu-e170/', img: 'https://www.musicarms.net/wp-content/uploads/2021/08/Symphony-JYTU-E170.jpg', badge: '' },
    { id: 34, cat: 'wind', name: 'Blessing BM-111S Mellophone', desc: 'เมลโลโฟเนียมมอบเสียงฮอร์นคลาสสิก ซึ่งเป็นหัวใจสำคัญของวงดนตรีเดินแถวที่ยอดเยี่ยม', price: '฿69,000', url: 'https://www.musicarms.net/blessing-bm-111s/', img: 'https://www.musicarms.net/wp-content/uploads/2025/04/Blessing-BM-111S.jpg', badge: 'Mellophon' },
    { id: 35, cat: 'wind', name: 'Yamaha YHR-567 French Horns', desc: 'ดับเบิ้ลฮอร์นในคีย์ Bb และ F ที่ออกแบบมาจากพื้นฐานของรุ่น YHR-667V สามารถออกเสียงได้ง่ายและมี Intonation ที่ดี', price: '฿172,000', url: 'https://www.musicarms.net/yamaha-yhr-567-french-horns-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B9%E0%B8%81/', img: 'https://www.musicarms.net/wp-content/uploads/2015/04/9514_12073_1.jpg', badge: '' },
    { id: 36, cat: 'wind', name: 'Coleman CCL-200S Clarinet', desc: 'คลาลิเน็ตในระดับเสียง Bb ที่ได้รับการออกแบบมาเป็นพิเศษเพื่อให้ตอบโจทย์นักเรียน นักศึกษา และผู้เริ่มต้นฝึกฝนได้อย่างยอดเยี่ยม', price: '฿19,000', url: 'https://www.musicarms.net/coleman-ccl-200s-clarinet/', img: 'https://www.musicarms.net/wp-content/uploads/2026/07/Coleman-CCL-200S-Clarinet-6.webp', badge: 'Clarinet' },
    { id: 37, cat: 'wind', name: 'Blessing BTR-1460S Bb Trumpet', desc: 'Blessing ได้ออกแบบทรัมเป็ตที่ยอดเยี่ยม โดยใช้วัสดุและการผลิตที่มีคุณภาพ ซึ่งส่งเสริมทั้งความมั่นใจและการเติบโตทางดนตรีของนักดนตรีที่กำลังพัฒนา เครื่องดนตรีที่มีความสมดุลที่ดีนี้มอบความยืดหยุ่นที่จำเป็นสำหรับบริบททางดนตรีที่หลากหลาย', price: '฿45,000', url: 'https://www.musicarms.net/blessing-btr-1460s/', img: 'https://www.musicarms.net/wp-content/uploads/2025/04/Blessing-BTR-1460S-1024x1024.jpg', badge: 't' },
    { id: 38, cat: 'wind', name: 'Yamaha YEP-621S Euphonium', desc: 'ยูโฟเนียมระดับมืออาชีพยอดนิยมที่ได้รับการยอมรับอย่างกว้างขวางจากนักดนตรีทั่วโลก', price: '฿176,800', url: 'https://www.musicarms.net/yamaha-yep-621s-euphonium/', img: 'https://www.musicarms.net/wp-content/uploads/2026/09/Yamaha-YEP-621S-Euphonium.jpg', badge: 'Euphonium' },
    { id: 39, cat: 'wind', name: 'Ayers AFL2223', desc: 'ฟลูตมาตรฐานราคาย่อมเยา ตัวบอดี้นั้นทำจากนิกเกิ้ล ทนทานไม่สึกหรอง่าย', price: '฿8,000', url: 'https://www.musicarms.net/%e0%b8%9f%e0%b8%a5%e0%b8%b9%e0%b8%95-ayers-afl2223/', img: 'https://www.musicarms.net/wp-content/uploads/2020/01/%E0%B8%9F%E0%B8%A5%E0%B8%B9%E0%B8%95-Ayers-AFL2223.jpg', badge: '' },
    { id: 40, cat: 'wind', name: 'Yamaha YSH-411 Brass Sousaphone', desc: 'ห้เสียงออร์เคสตร้าที่เข้มอย่างไม่น่าเชื่อ ปากลำโพงด้านหน้าช่วยเพื่มเสียงพุ่ง', price: '฿396,000.00', url: 'https://marcato.co.th/product/yamaha-ysh-411-brass-sousaphone/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnSt9r7EmRnC-KOyXXwh-And41cO0FaSI_8jVkYNxyDHjYWHiVt6ck-sZ&s=10', badge: 'Sousaphone' },

    // STUDIO & AMPS (10 items)
    { id: 41, cat: 'studio', name: 'SHURE SM58 (SM58-LC)', desc: 'ไมโครโฟน Shure SM58-LC รุ่นฮิตที่ศิลปินทั่วโลกเลือกใช้', price: '฿4,990', url: 'https://www.atprosound.com/product/shure-sm58/', img: 'https://audiocity.co.th/pub/media/catalog/product/cache/3d76ed96114a1371f42b83296eccd6e6/_/s/_shure_sm58-lc_5.jpg', badge: 'World Standard' },
    { id: 42, cat: 'studio', name: 'Focusrite Scarlett 2i2 4th', desc: 'ถ่ายทอดรายละเอียดเสียงได้ชัดทุกมิติ ตั้งแต่เสียงกระซิบไปจนถึงเสียงเบสลึก', price: '฿8,790', url: 'https://proplugin.com/th/product/focusrite-scarlett-2i2-4th-gen-usb-audio-interface/', img: 'https://proplugin.com/wp-content/uploads/2023/08/Scarlett-2i2_front-elevated_HR.png-1.webp', badge: '#1 Audio Interface' },
    { id: 43, cat: 'studio', name: 'SHURE SM7B', desc: 'SHURE SM7B ไมโครโฟนไดนามิก สำหรับพอดแคสต์ จัดรายการ และอัดเสียงร้อง', price: '฿17,900', url: 'https://www.atprosound.com/product/shure-sm7b/', img: 'https://www.atprosound.com/wp-content/uploads/2020/03/SHURE-SM7B-recording-microphone-atprosound-1536x1536.jpg', badge: 'Streamer Choice' },
    { id: 44, cat: 'studio', name: 'Boss Katana 50 MKII', desc: 'ซีรี่ย์ Katana สุดฮิตที่ครองใจมือกีต้าร์มาอย่างยาวนาน', price: '฿9,200', url: 'https://www.musicarms.net/boss-katana-50-mkii-%E0%B9%81%E0%B8%AD%E0%B8%A1%E0%B8%9B%E0%B9%8C%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A0%E0%B8%B2%E0%B8%9E/', img: 'https://www.musicarms.net/wp-content/uploads/2019/11/Face-cover-Boss-Katana-50-MkII.jpg', badge: 'Best Practice Amp' },
    { id: 45, cat: 'studio', name: 'YAMAHA HS5I ', desc: 'ลำโพงมอนิเตอร์แบบ Bi-amplified ที่มีกำลังขับในตัวนั้นให้ผลลัพธ์ทางไฟฟ้าและคุณภาพเสียงที่ดีที่สุด', price: '฿9,000', url: 'https://audiocity.co.th/brand/yamaha/yamaha-hs5i.html', img: 'https://audiocity.co.th/pub/media/catalog/product/cache/765fdf86a9e550514b9df31691b36e7f/h/s/hs8-1200-1.jpg', badge: 'Studio Monitor' },
    { id: 46, cat: 'studio', name: 'Audio Technica ATH-M50x studio monitor', desc: 'หูฟังมอนิเตอร์ระดับโปร เสียงชัดทุกย่านความถี่ คุ้มค่าที่สุด', price: '฿5,900', url: 'https://www.425degree.com/audio-technica-ath-m50x-studio-monitor.html', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsqOamU2GuVjkgv9qbLuqrdFPLdiubW2LHdWnUwj7rg&s=10', badge: 'Pro Headphones' },
    { id: 47, cat: 'studio', name: 'Universal Audio Apollo Twin X DUO Gen 2', desc: 'ออดิโออินเทอร์เฟซคุณภาพสูงระดับมืออาชีพ ให้เสียงที่เป็นเอกลักษณ์แบบอุปกรณ์อนาล็อค', price: '฿54,900', url: 'https://www.atprosound.com/product/universal-audio-apollo-twin-x-duo-gen-2/', img: 'https://www.atprosound.com/wp-content/uploads/2024/11/Universal-Audio-Apollo-Twin-X-DUO-Gen-2-Right-Rear-AT-Prosound.jpg', badge: 'High-End Interface' },
    { id: 48, cat: 'studio', name: 'Neural DSP Quad Cortex', desc: 'เอฟเฟกต์จำลองแอมป์และเสียงระดับนวัตกรรมที่แรงที่สุดในยุคนี้', price: '฿69,000', url: 'https://www.musicarms.net/neural-dsp-quad-cortex/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZUEeH5nEm3EItUbW0bTcubO9MNPfECNhG2pOaZqbAw&s=10', badge: 'Ultimate Modeler' },
    { id: 49, cat: 'studio', name: 'Neumann U 87 AI STUDIO SET BK', desc: 'ไมค์สตูดิโอสำหรับงานบันทึกเสียง Neumann U87 Ai เป็นไมโครโฟนแบบคอนเด็นเซอร์', price: '฿196,000', url: 'https://audiocity.co.th/brand/neumann/neumann-u87ai-studio-set-bk.html', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9s7MOdgtTHhngvI2BxJd-JDW0FK52I0zvRQyglw2PQ&s=10', badge: 'Legendary Condenser' },
    { id: 50, cat: 'studio', name: 'GENELEC 8030C', desc: 'ลำโพงสตูมอนิเตอร์สำหรับห้องบันทึกเสียง Genelec 8030C เป็นลำโพงรุ่นใหม่ล่าสุด', price: '฿22,800', url: 'https://www.atprosound.com/product/genelec-8030c/?attribute_pa_instrument-color=dark-grey', img: 'https://www.atprosound.com/wp-content/uploads/2020/05/GENELEC-8030C-Dark-Grey-L-ATPROSOUND-1536x1536.jpg', badge: 'Top Precision' }
];

// HTML Card Generator Function
function createCardHTML(item) {
    return `
    <div class="product-card">
        <img class="product-img" src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="product-info">
                <div class="product-title">${item.name}</div>
                <div class="product-desc">${item.desc}</div>
                <div class="product-meta">
                    <div class="price">${item.price}</div>
                    <a href="${item.url}" target="_blank" class="buy-btn">ซื้อสินค้า <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7rem;"></i></a>
                </div>
            </div>
    </div>
    `;
}

// Render Products into Respective Category Grids
function renderAllCategories() {
    const categories = ['guitar', 'piano', 'drums', 'wind', 'studio'];

    categories.forEach(cat => {
        const grid = document.getElementById(`grid-${cat}`);
        if (grid) {
            const items = products.filter(p => p.cat === cat);
            grid.innerHTML = items.map(item => createCardHTML(item)).join('');
        }
    });
}

// Smooth Scroll & Reset Search
function scrollToCategory(elementId, btn) {
    if (btn) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim() !== '') {
        searchInput.value = '';
        searchProducts();
    }

    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Real-time Search Filter
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const searchContainer = document.getElementById('searchResultContainer');
    const allCategoriesContainer = document.getElementById('allCategoriesContainer');
    const searchGrid = document.getElementById('searchGrid');

    if (searchTerm !== '') {
        allCategoriesContainer.style.display = 'none';
        searchContainer.style.display = 'block';

        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.desc.toLowerCase().includes(searchTerm)
        );

        if (filtered.length === 0) {
            searchGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-sub);">ไม่พบเครื่องดนตรีที่ค้นหา</div>`;
        } else {
            searchGrid.innerHTML = filtered.map(item => createCardHTML(item)).join('');
        }
    } else {
        searchContainer.style.display = 'none';
        allCategoriesContainer.style.display = 'block';
    }
}

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    renderAllCategories();
});
function toggleMusic() {
    const music = document.getElementById('myMusic');

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}