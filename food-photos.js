// One distinct, source-attributed image per venue; dish illustrations are labelled.
const foodPhotos = [
 ['https://cattour.vn/images/upload/images/du-lich-ninh-binh/de-ninh-binh/nha-hang-duc-de-2.jpg','Đức Dê restaurant','Restaurant photo · Cattour','https://cattour.vn/blog/de-ninh-binh-1776.html'],
 ['https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/09_2025/nha_hang_ngon_gan_tam_coc_ninh_binh_viet_xua__.jpg','Clay-pot rice and home-style dishes','Illustrative rice meal · Lữ Hành Việt Nam','https://luhanhvietnam.com.vn/du-lich/nha-hang-ngon-gan-tam-coc-ninh-binh.html'],
 ['https://comnieunhadodanang.vn/images/TinTuc/nau-com-nieu-bang-cui.jpg','Rice cooking in a clay pot','Illustrative clay-pot rice · Cơm Niêu Nhà Đỏ','https://comnieunhadodanang.vn/gioi-thieu/81-cach-nau-com-nieu-chuan-dan-gian.html'],
 ['https://media.urbanistnetwork.com/saigoneer/article-images/2025/02/13/mien-luon/06b.jpg','Glass noodles with crispy eel','Illustrative eel noodles · Saigoneer','https://saigoneer.com/hanoi-street-food-restaurants/22813-ng%C3%B5-nooks-crispy-fried-eels-complete-this-warming-winter-soup'],
 ['https://suckhoeviet.org.vn/stores/news_dataimages/2023/102023/03/19/6d374624622b4eb9cabc62871ecff03e.jpg?rt=20231003195218','Vũ Bảo fish salad with fresh herbs','Vũ Bảo speciality · Sức Khỏe Việt','https://suckhoeviet.org.vn/goi-ca-nhech-dam-vi-que-nha-tren-dau-luoi-8341.html'],
 ['https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/22/mon-an-doc-la-o-ninh-binh3-16926773476581086029735.jpg','Grilled pork patties with vermicelli and herbs','Illustrative bún chả · Dân Việt','https://danviet.vn/mon-an-doc-la-o-ninh-binh-du-khach-khong-nen-bo-qua-cuc-ngon-cuc-ngot-20230822112400734-d1113574.html'],
 ['https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/09_2022/dac-san-kim-son-ninh-binh-bun-moc-_.jpg','Bún mọc soup with pork meatballs','Illustrative bún mọc · Lữ Hành Việt Nam','https://luhanhvietnam.com.vn/du-lich/dac-san-kim-son-ninh-binh-dan-da.html'],
 ['https://diadiemanuong.net.vn/upload/images2/users/adminweb%40yahoo.com/2021224070405_namquan.jpg','Broken rice topped with grilled pork ribs','Illustrative cơm tấm · Địa Điểm Ăn Uống','https://diadiemanuong.net.vn/chi-tiet/xem/14/58645-com-tam-suon-cong-com-trua-ngon-kcn-tan-tao'],
 ['https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwfeg0fvb3rta7%40resize_ss640x400','Steamed rice rolls with pork sausage and dipping sauce','Illustrative bánh cuốn · Foody','https://www.foody.vn/ninh-binh/banh-cuon-cha-van-giang'],
 ['https://cdn.tgdd.vn/Files/2021/12/06/1402722/10-quan-chan-ga-ngon-nhat-o-sai-gon-duoc-rat-nhieu-ban-tre-yeu-thich-202112070916187418.jpg','Grilled chicken feet with dipping salt and lime','Illustrative grilled chicken feet · Bách Hóa Xanh','https://www.bachhoaxanh.com/kinh-nghiem-hay/10-quan-chan-ga-ngon-nhat-o-sai-gon-duoc-rat-nhieu-ban-tre-yeu-thich-1402722'],
 ['https://img-global.cpcdn.com/recipes/56ae8903d4bc2325/751x532cq70/banh-trang-tr%E1%BB%99n-recipe-main-photo.jpg','Rice-paper salad with quail eggs and herbs','Illustrative bánh tráng trộn · Cookpad','https://cookpad.com/vn/cong-thuc/5543084-banh-trang-tr%E1%BB%99n'],
 ['https://kenh14cdn.com/203336854389633024/2022/8/23/photo-1-16612543489212048270573.jpg','Hải Phòng-style mini baguettes with pâté','Illustrative bánh mì cay · Kenh14','https://kenh14.vn/banh-mi-cay-hai-phong-thuc-qua-vat-khong-the-bo-qua-moi-khi-den-thanh-pho-cang-20220823183755202.chn'],
 ['https://img-global.cpcdn.com/steps/f332d18b1c9888cd/400x400cq80/photo.jpg','Boiled snails with ginger, garlic and chilli dipping sauce','Illustrative boiled snails · Cookpad','https://cookpad.com/vn/cong-thuc/15745271'],
 ['https://cdn.justfly.vn/1920x1080/media/202105/21/1621588631-nha-hang-cho-que-quan-ninh-binh.jpg','Chợ Quê Quán garden courtyard and restaurant entrance','Restaurant photo · Justfly','https://justfly.vn/discovery/vietnam/ninh-binh/nha-hang-hai-san'],
 ['https://i.imgur.com/Qx9OXwz.jpg','Pomelo sweet soup topped with coconut cream','Illustrative chè bưởi · Unica','https://unica.vn/blog/cach-nau-che-buoi-khong-can-phen-chua-giai-khat-ngay-he']
];
document.querySelectorAll('.food-card').forEach((card,i)=>{
 const [url,alt,label,source]=foodPhotos[i];
 card.querySelector('figure')?.remove();
 const figure=document.createElement('figure'),img=document.createElement('img'),caption=document.createElement('figcaption'),link=document.createElement('a');
 img.alt=alt;img.loading='lazy';img.width=800;img.height=480;
 img.addEventListener('error',()=>{
   if(img.dataset.sceneryFallback)return;
   img.dataset.sceneryFallback='1';
   img.alt='Illustrative Ninh Bình limestone landscape';
   link.textContent='Illustrative Ninh Bình scenery · Unsplash';
   link.href='https://unsplash.com/photos/a-river-running-through-a-lush-green-valley-gtZoAtx4vHY';
   img.src='https://images.unsplash.com/photo-1686766219304-5e2fb0df9d2d?auto=format&fit=crop&w=900&q=85';
 });
 link.href=source;link.target='_blank';link.rel='noopener';link.textContent=label;
 caption.append(link);figure.append(img,caption);card.prepend(figure);img.src=url;
});
