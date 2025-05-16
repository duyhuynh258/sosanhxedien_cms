curl -X POST 'http://localhost:1337/api/ev-models' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 233efdf0aca1fcd298a63acab1e1935ccf217af12b80e3ac6aa853500ea001f08759b9253198413d52b067250a534e9bd99e2a4b69f8cb2fdf6f890f6d9ce16d952cdf0fefbe633feb07ba35a4fe3dc422af2390027ce6ab2d01e68d925c5ffddf7d3319157b5c312c47a03dc4f03918660bc524d977ac57df6dd327d7fa2fa9' \
  -d @- << 'EOF'
{
  "data": {
    "model_name": "BYD Dolphin",
    "brand": 6,
    "year": "2024",
    "price_vnd": "770000000",
    "range_km": 430,
    "battery_kwh": 55.4,
    "charge_time": "7 giờ với sạc AC; 0-80% DC trong 30 phút",
    "description": "Xe điện đô thị nhỏ gọn với thiết kế hiện đại, công nghệ tiên tiến và hiệu suất tối ưu.",
    "slug": "byd-dolphin-2024",
    "review_articles": [],
    "specifications": [
      {
        "section_title": "Kích thước & Trọng lượng",
        "specs": [
          { "label": "Chiều dài tổng thể", "value": "4.710 mm", "is_highlighted": false },
          { "label": "Chiều rộng", "value": "1.810 mm", "is_highlighted": false },
          { "label": "Chiều cao", "value": "1.540/1.530 mm", "is_highlighted": false },
          { "label": "Chiều dài cơ sở", "value": "2.800 mm", "is_highlighted": false },
          { "label": "Khoảng sáng gầm", "value": "110 mm", "is_highlighted": false },
          { "label": "Tổng trọng lượng", "value": "2.374 kg", "is_highlighted": false }
        ]
      },
      {
        "section_title": "Pin & Sạc",
        "specs": [
          { "label": "Loại pin", "value": "BYD Blade Battery", "is_highlighted": true },
          { "label": "Dung lượng pin", "value": "55.4 kWh", "is_highlighted": true },
          { "label": "Thời gian sạc AC", "value": "7 giờ", "is_highlighted": false },
          { "label": "Thời gian sạc nhanh DC", "value": "30 phút (0-80%)", "is_highlighted": false }
        ]
      },
      {
        "section_title": "Hiệu suất",
        "specs": [
          { "label": "Công suất", "value": "161 mã lực", "is_highlighted": true },
          { "label": "Tốc độ tối đa", "value": "160 km/h", "is_highlighted": false },
          { "label": "Tăng tốc 0-100 km/h", "value": "10.1 giây", "is_highlighted": false }
        ]
      }
    ],
    "locale": "vi"
  }
}
EOF
