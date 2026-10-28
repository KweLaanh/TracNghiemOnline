javascript
/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM VÀ ĐÚNG SAI CHUẨN XÁC 100%
 * Trích xuất từ tài liệu "Công nghệ 12 - Điện Điện Tử" (Bài 1 -> Bài 6)
 * Gồm: 180 câu trắc nghiệm 4 lựa chọn (MC) + 36 câu Đúng/Sai đa nhận định (TF)
 */

const FULL_DATABASE = [
  // ==========================================
  // BÀI 1: GIỚI THIỆU TỔNG QUAN VỀ KĨ THUẬT ĐIỆN
  // ==========================================
  // --- 30 Câu Trắc Nghiệm ---
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 1 (Trang 1)",
    question: "Kĩ thuật điện là ngành kĩ thuật nghiên cứu và ứng dụng công nghệ điện, điện tử vào",
    options: [
      { key: "A", text: "sản xuất, truyền tải, phân phối và sử dụng điện năng." },
      { key: "B", text: "thiết kế phần mềm máy tính." },
      { key: "C", text: "chế tạo cơ khí ô tô." },
      { key: "D", text: "khai thác dầu khí." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 2 (Trang 1)",
    question: "Một trong các lĩnh vực chính của kĩ thuật điện là",
    options: [
      { key: "A", text: "thiết kế kiến trúc." },
      { key: "B", text: "truyền tải điện năng." },
      { key: "C", text: "sản xuất vật liệu xây dựng." },
      { key: "D", text: "thiết kế thời trang." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 3 (Trang 1)",
    question: "Trong hệ thống điện, nguồn điện có chức năng",
    options: [
      { key: "A", text: "tiêu thụ điện năng." },
      { key: "B", text: "truyền thông tin." },
      { key: "C", text: "tạo ra điện năng." },
      { key: "D", text: "lưu trữ dữ liệu." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 4 (Trang 1)",
    question: "Lưới điện có vai trò chính là",
    options: [
      { key: "A", text: "tạo ra điện năng." },
      { key: "B", text: "truyền tải và phân phối điện năng." },
      { key: "C", text: "tiêu thụ điện năng." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 5 (Trang 1)",
    question: "Đối tượng sử dụng điện năng trong hệ thống điện được gọi là",
    options: [
      { key: "A", text: "nguồn điện." },
      { key: "B", text: "lưới điện." },
      { key: "C", text: "tải tiêu thụ." },
      { key: "D", text: "trạm biến áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 6 (Trang 1)",
    question: "Thiết bị nào sau đây thuộc nhóm thiết bị phát điện?",
    options: [
      { key: "A", text: "bóng đèn." },
      { key: "B", text: "máy phát điện." },
      { key: "C", text: "tủ lạnh." },
      { key: "D", text: "quạt điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 7 (Trang 1)",
    question: "Trạm biến áp có chức năng chính là",
    options: [
      { key: "A", text: "tăng/giảm điện áp." },
      { key: "B", text: "tạo ra điện năng." },
      { key: "C", text: "tiêu thụ điện năng." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 8 (Trang 1)",
    question: "Kĩ thuật điện bao gồm các hoạt động",
    options: [
      { key: "A", text: "sản xuất, truyền tải, phân phối và sử dụng điện năng." },
      { key: "B", text: "kinh doanh thương mại." },
      { key: "C", text: "thiết kế thời trang." },
      { key: "D", text: "nghiên cứu sinh học." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 9 (Trang 1)",
    question: "Thiết bị nào sau đây thuộc nhóm tiêu thụ điện?",
    options: [
      { key: "A", text: "nhà máy điện." },
      { key: "B", text: "đường dây truyền tải." },
      { key: "C", text: "quạt điện." },
      { key: "D", text: "trạm biến áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 10 (Trang 1)",
    question: "Điện năng được tạo ra từ quá trình",
    options: [
      { key: "A", text: "biến đổi năng lượng khác thành điện năng." },
      { key: "B", text: "tiêu thụ điện năng." },
      { key: "C", text: "truyền tải điện năng." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 11 (Trang 1)",
    question: "Kĩ thuật điện có vai trò quan trọng nhất trong sản xuất là",
    options: [
      { key: "A", text: "giảm chi phí marketing." },
      { key: "B", text: "nâng cao năng suất và chất lượng sản phẩm." },
      { key: "C", text: "tăng dân số." },
      { key: "D", text: "thay đổi khí hậu." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 12 (Trang 1)",
    question: "Thiết bị điện trong sản xuất có vai trò",
    options: [
      { key: "A", text: "thay thế hoàn toàn con người trong mọi công việc." },
      { key: "B", text: "hỗ trợ cơ giới hóa và tự động hóa sản xuất." },
      { key: "C", text: "chỉ dùng để chiếu sáng." },
      { key: "D", text: "chỉ dùng để giải trí." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 13 (Trang 2)",
    question: "Trong đời sống, điện năng giúp",
    options: [
      { key: "A", text: "giảm chất lượng cuộc sống." },
      { key: "B", text: "tăng sự bất tiện." },
      { key: "C", text: "nâng cao tiện nghi sinh hoạt." },
      { key: "D", text: "làm giảm hiệu quả công việc." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 14 (Trang 2)",
    question: "Lưới điện thông minh có đặc điểm",
    options: [
      { key: "A", text: "không cần điều khiển." },
      { key: "B", text: "chỉ truyền điện một chiều." },
      { key: "C", text: "tích hợp đo lường và điều khiển tự động." },
      { key: "D", text: "không sử dụng công nghệ số." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 15 (Trang 2)",
    question: "Năng lượng tái tạo là",
    options: [
      { key: "A", text: "năng lượng không thể tái sinh." },
      { key: "B", text: "năng lượng từ nhiên liệu hóa thạch." },
      { key: "C", text: "năng lượng có thể tái sinh tự nhiên." },
      { key: "D", text: "năng lượng hạt nhân." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 16 (Trang 2)",
    question: "Xe điện thuộc xu hướng phát triển nào?",
    options: [
      { key: "A", text: "giao thông sử dụng năng lượng hóa thạch." },
      { key: "B", text: "giao thông sử dụng năng lượng điện." },
      { key: "C", text: "giao thông thủ công." },
      { key: "D", text: "giao thông đường thủy." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 17 (Trang 2)",
    question: "Hệ sinh thái thông minh được hiểu là",
    options: [
      { key: "A", text: "hệ thống không kết nối." },
      { key: "B", text: "các thiết bị không liên quan nhau." },
      { key: "C", text: "hệ thống thiết bị kết nối qua internet và chia sẻ dữ liệu." },
      { key: "D", text: "hệ thống thủ công." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 18 (Trang 2)",
    question: "Vai trò của kĩ thuật điện trong đời sống là",
    options: [
      { key: "A", text: "giảm tiện nghi sinh hoạt." },
      { key: "B", text: "nâng cao chất lượng cuộc sống." },
      { key: "C", text: "làm giảm giao tiếp xã hội." },
      { key: "D", text: "hạn chế công nghệ." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 19 (Trang 2)",
    question: "Thiết bị điện gia dụng thông minh giúp",
    options: [
      { key: "A", text: "giảm hiệu quả sử dụng năng lượng." },
      { key: "B", text: "tiết kiệm năng lượng và tăng tiện nghi." },
      { key: "C", text: "tăng tiêu hao điện năng." },
      { key: "D", text: "làm giảm chất lượng cuộc sống." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 20 (Trang 2)",
    question: "Xu hướng phát triển vật liệu mới trong kĩ thuật điện nhằm",
    options: [
      { key: "A", text: "tăng tiêu hao năng lượng." },
      { key: "B", text: "giảm hiệu suất thiết bị." },
      { key: "C", text: "tăng hiệu suất và tiết kiệm năng lượng." },
      { key: "D", text: "giảm độ bền thiết bị." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 21 (Trang 2)",
    question: "Khi nghiên cứu hệ thống nhà thông minh, học sinh nhận thấy khả năng điều khiển thiết bị điện từ xa giúp",
    options: [
      { key: "A", text: "tăng tiêu thụ điện không kiểm soát." },
      { key: "B", text: "giảm khả năng quản lý năng lượng." },
      { key: "C", text: "tối ưu hóa sử dụng điện năng." },
      { key: "D", text: "không có lợi ích gì." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 22 (Trang 2)",
    question: "Trong một gia đình sử dụng điện mặt trời, lợi ích chính là",
    options: [
      { key: "A", text: "tăng phụ thuộc vào lưới điện quốc gia." },
      { key: "B", text: "giảm sử dụng năng lượng tái tạo." },
      { key: "C", text: "giảm chi phí điện và bảo vệ môi trường." },
      { key: "D", text: "tăng ô nhiễm môi trường." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 23 (Trang 2)",
    question: "Lý do chính khiến xe điện được xem là xu hướng phát triển hiện nay là do",
    options: [
      { key: "A", text: "gây ô nhiễm nhiều hơn xe xăng." },
      { key: "B", text: "không cần năng lượng." },
      { key: "C", text: "giảm phát thải khí nhà kính." },
      { key: "D", text: "không thể sử dụng thực tế." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 24 (Trang 2)",
    question: "Trong nhà máy thông minh, hệ thống điều khiển tự động giúp",
    options: [
      { key: "A", text: "giảm năng suất." },
      { key: "B", text: "tăng lỗi sản xuất." },
      { key: "C", text: "tối ưu hóa quy trình sản xuất." },
      { key: "D", text: "làm gián đoạn sản xuất." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 25 (Trang 3)",
    question: "Một thành phố muốn giảm tải điện giờ cao điểm bằng lưới điện thông minh. Giải pháp phù hợp là",
    options: [
      { key: "A", text: "tăng điện tiêu thụ không kiểm soát." },
      { key: "B", text: "điều khiển phân phối điện theo thời gian thực." },
      { key: "C", text: "ngắt toàn bộ hệ thống điện." },
      { key: "D", text: "giảm số hộ dùng điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 26 (Trang 3)",
    question: "Một khu công nghiệp muốn nâng cao hiệu suất năng lượng. Giải pháp phù hợp là",
    options: [
      { key: "A", text: "sử dụng thiết bị lạc hậu." },
      { key: "B", text: "không dùng tự động hóa." },
      { key: "C", text: "áp dụng hệ thống điều khiển và giám sát thông minh." },
      { key: "D", text: "giảm sản xuất." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 27 (Trang 3)",
    question: "Trong đời sống, việc sử dụng thiết bị tiết kiệm điện giúp",
    options: [
      { key: "A", text: "tăng chi phí điện." },
      { key: "B", text: "giảm hiệu quả sử dụng năng lượng." },
      { key: "C", text: "giảm chi phí và bảo vệ môi trường." },
      { key: "D", text: "tăng ô nhiễm." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 28 (Trang 3)",
    question: "Khi sử dụng hệ thống điện thông minh, người dùng có thể",
    options: [
      { key: "A", text: "không kiểm soát được điện năng." },
      { key: "B", text: "giám sát và điều chỉnh tiêu thụ điện." },
      { key: "C", text: "tăng lãng phí điện." },
      { key: "D", text: "giảm tiện ích sinh hoạt." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 29 (Trang 3)",
    question: "Xu hướng phát triển kĩ thuật điện hiện nay là",
    options: [
      { key: "A", text: "giảm ứng dụng công nghệ số." },
      { key: "B", text: "quay lại hệ thống thủ công." },
      { key: "C", text: "phát triển lưới điện thông minh và năng lượng tái tạo." },
      { key: "D", text: "giảm tự động hóa." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 1", type: "mc", source: "Bài 1 - Câu 30 (Trang 3)",
    question: "Việc kết nối thiết bị qua internet trong hệ sinh thái thông minh giúp",
    options: [
      { key: "A", text: "giảm khả năng quản lý." },
      { key: "B", text: "tăng sự bất tiện." },
      { key: "C", text: "tăng hiệu quả điều khiển và giám sát." },
      { key: "D", text: "không có giá trị thực tế." }
    ],
    correct: "C"
  },
  // --- 6 Câu Đúng / Sai ---
  {
    topic: "BÀI 1", type: "tf", source: "Bài 1 - Phần II - Câu 1 (Trang 3)",
    question: "Trong quá trình học về khái niệm kĩ thuật điện, nhóm học sinh thảo luận và đưa ra các nhận định sau:",
    items: [
      { key: "a", text: "Kĩ thuật điện là ngành nghiên cứu và ứng dụng công nghệ điện, điện tử trong sản xuất, truyền tải và sử dụng điện năng.", correct: true },
      { key: "b", text: "Lưới điện chỉ có chức năng phát điện cho các hộ tiêu thụ.", correct: false },
      { key: "c", text: "Hộ gia đình sử dụng điện mặt trời mái nhà có thể giảm phụ thuộc vào lưới điện quốc gia.", correct: true },
      { key: "d", text: "Thiết bị tiêu thụ điện năng có thể là máy phát điện trong nhà máy.", correct: false }
    ]
  },
  {
    topic: "BÀI 1", type: "tf", source: "Bài 1 - Phần II - Câu 2 (Trang 3)",
    question: "Khi thảo luận về vai trò của kĩ thuật điện trong sản xuất công nghiệp, học sinh đưa ra các nhận định sau:",
    items: [
      { key: "a", text: "Nguồn điện có chức năng tạo ra điện năng cung cấp cho hệ thống điện.", correct: true },
      { key: "b", text: "Truyền tải điện giúp tăng điện áp tại nơi tiêu thụ để tiết kiệm điện năng.", correct: false },
      { key: "c", text: "Việc ứng dụng hệ thống điện trong nhà máy giúp tăng năng suất lao động.", correct: true },
      { key: "d", text: "Điện năng không ảnh hưởng đến chất lượng sản phẩm trong sản xuất công nghiệp.", correct: false }
    ]
  },
  {
    topic: "BÀI 1", type: "tf", source: "Bài 1 - Phần II - Câu 3 (Trang 3-4)",
    question: "Khi tìm hiểu về lưới điện thông minh trong hệ thống điện hiện đại, đánh giá các nhận định sau:",
    items: [
      { key: "a", text: "Lưới điện thông minh tích hợp hệ thống đo lường, điều khiển và công nghệ số.", correct: true },
      { key: "b", text: "Lưới điện thông minh không sử dụng công nghệ số.", correct: false },
      { key: "c", text: "Công tơ điện tử giúp người dùng giám sát và quản lí lượng điện năng tiêu thụ.", correct: true },
      { key: "d", text: "Việc ứng dụng lưới điện thông minh có thể làm tăng lãng phí điện năng.", correct: false }
    ]
  },
  {
    topic: "BÀI 1", type: "tf", source: "Bài 1 - Phần II - Câu 4 (Trang 4)",
    question: "Trong xu thế phát triển đô thị thông minh, đánh giá các nhận định về hệ thống điện:",
    items: [
      { key: "a", text: "Việc tích hợp năng lượng tái tạo giúp giảm phát thải khí nhà kính trong hệ thống điện đô thị.", correct: true },
      { key: "b", text: "Hệ thống điều khiển phụ tải thông minh giúp cân bằng cung – cầu điện theo thời gian thực.", correct: true },
      { key: "c", text: "Mô hình đô thị thông minh không cần hệ thống giám sát năng lượng.", correct: false },
      { key: "d", text: "Hệ thống sạc xe điện thông minh có thể phối hợp với lưới điện để tối ưu hóa phụ tải.", correct: true }
    ]
  },
  {
    topic: "BÀI 1", type: "tf", source: "Bài 1 - Phần II - Câu 5 (Trang 4)",
    question: "Trong bối cảnh sản xuất hiện đại, xác định tính đúng/sai của các nhận định về hệ thống điện tự động hóa:",
    items: [
      { key: "a", text: "Điện năng cung cấp cho dây chuyền sản xuất tự động hóa.", correct: true },
      { key: "b", text: "Việc sử dụng thiết bị điện không ảnh hưởng đến năng suất sản xuất.", correct: false },
      { key: "c", text: "Hệ thống điều khiển điện giúp tối ưu hóa quy trình sản xuất.", correct: true },
      { key: "d", text: "Thiết bị điện góp phần giảm sức lao động thủ công của con người.", correct: true }
    ]
  },
  {
    topic: "BÀI 1", type: "tf", source: "Bài 1 - Phần II - Câu 6 (Trang 4)",
    question: "Khi chuyển đổi sang mô hình khu công nghiệp xanh, xét các đánh giá sau:",
    items: [
      { key: "a", text: "Việc sử dụng năng lượng tái tạo giúp giảm sự phụ thuộc vào nhiên liệu hóa thạch.", correct: true },
      { key: "b", text: "Lưới điện thông minh không có khả năng điều khiển phụ tải theo thời gian thực.", correct: false },
      { key: "c", text: "Hệ thống quản lí năng lượng thông minh giúp tối ưu chi phí vận hành.", correct: true },
      { key: "d", text: "Việc tích hợp công nghệ số vào hệ thống điện giúp tăng hiệu quả quản lí và vận hành.", correct: true }
    ]
  },

  // ==========================================
  // BÀI 2: NGÀNH NGHỀ TRONG LĨNH VỰC KĨ THUẬT ĐIỆN
  // ==========================================
  // --- 30 Câu Trắc Nghiệm ---
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 1 (Trang 4)",
    question: "Kĩ thuật điện gồm các hoạt động liên quan đến",
    options: [
      { key: "A", text: "thiết kế thời trang." },
      { key: "B", text: "sản xuất phần mềm." },
      { key: "C", text: "sản xuất, truyền tải và sử dụng điện năng." },
      { key: "D", text: "nghiên cứu sinh học." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 2 (Trang 4)",
    question: "Thiết kế điện thuộc lĩnh vực nào của kĩ thuật điện?",
    options: [
      { key: "A", text: "Sản xuất điện năng." },
      { key: "B", text: "Lắp đặt điện." },
      { key: "C", text: "Thiết kế hệ thống và thiết bị điện." },
      { key: "D", text: "Kinh doanh điện năng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 3 (Trang 4)",
    question: "Công việc sản xuất thiết bị điện chủ yếu diễn ra ở",
    options: [
      { key: "A", text: "văn phòng hành chính." },
      { key: "B", text: "dây chuyền công nghiệp." },
      { key: "C", text: "trường học." },
      { key: "D", text: "khu dân cư." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 4 (Trang 5)",
    question: "Lắp đặt điện là công việc",
    options: [
      { key: "A", text: "thiết kế mạch điện trên giấy." },
      { key: "B", text: "thi công, đấu nối hệ thống điện." },
      { key: "C", text: "quản lí tài chính điện lực." },
      { key: "D", text: "sản xuất linh kiện điện tử." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 5 (Trang 5)",
    question: "Vận hành điện nhằm",
    options: [
      { key: "A", text: "tạo ra thiết bị điện mới." },
      { key: "B", text: "duy trì hệ thống điện hoạt động ổn định." },
      { key: "C", text: "thiết kế nhà máy điện." },
      { key: "D", text: "chế tạo máy móc cơ khí." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 6 (Trang 5)",
    question: "Bảo dưỡng và sửa chữa điện là công việc",
    options: [
      { key: "A", text: "tạo ra điện năng." },
      { key: "B", text: "duy trì và khắc phục sự cố hệ thống điện." },
      { key: "C", text: "thiết kế kiến trúc." },
      { key: "D", text: "bán thiết bị điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 7 (Trang 5)",
    question: "Một nghề thuộc lĩnh vực kĩ thuật điện là",
    options: [
      { key: "A", text: "thợ điện." },
      { key: "B", text: "nhà văn." },
      { key: "C", text: "kế toán." },
      { key: "D", text: "luật sư." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 8 (Trang 5)",
    question: "Việc lập bản vẽ và tính toán sơ bộ thiết bị cho hệ thống điện gia đình thuộc ngành nghề nào dưới đây?",
    options: [
      { key: "A", text: "Thiết kế điện." },
      { key: "B", text: "Vận hành điện." },
      { key: "C", text: "Sản xuất, chế tạo thiết bị điện." },
      { key: "D", text: "Bảo dưỡng, sửa chữa điện." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 9 (Trang 5)",
    question: "Công việc vận hành điện thường diễn ra ở",
    options: [
      { key: "A", text: "phòng điều khiển hệ thống điện." },
      { key: "B", text: "xưởng may." },
      { key: "C", text: "phòng học." },
      { key: "D", text: "cửa hàng bán lẻ." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 10 (Trang 5)",
    question: "Mục tiêu chính của ngành kĩ thuật điện là",
    options: [
      { key: "A", text: "tạo ra điện năng phục vụ sản xuất và đời sống." },
      { key: "B", text: "nghiên cứu văn học." },
      { key: "C", text: "thiết kế thời trang." },
      { key: "D", text: "sản xuất nông nghiệp." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 11 (Trang 5)",
    question: "Nghề thiết kế điện yêu cầu người lao động",
    options: [
      { key: "A", text: "không cần kiến thức chuyên môn." },
      { key: "B", text: "chỉ cần kinh nghiệm thực tế." },
      { key: "C", text: "có kiến thức chuyên môn về hệ thống điện." },
      { key: "D", text: "chỉ cần kỹ năng giao tiếp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 12 (Trang 5)",
    question: "Trong sản xuất thiết bị điện, vai trò của công nhân là",
    options: [
      { key: "A", text: "quản lí chiến lược." },
      { key: "B", text: "thiết kế hệ thống điện." },
      { key: "C", text: "trực tiếp vận hành dây chuyền sản xuất." },
      { key: "D", text: "nghiên cứu khoa học cơ bản." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 13 (Trang 5)",
    question: "Lắp đặt điện đòi hỏi người thực hiện phải",
    options: [
      { key: "A", text: "hiểu bản vẽ và quy chuẩn kỹ thuật." },
      { key: "B", text: "chỉ biết sử dụng điện thoại." },
      { key: "C", text: "không cần đào tạo." },
      { key: "D", text: "làm việc theo cảm tính." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 14 (Trang 5)",
    question: "Vận hành điện có vai trò quan trọng vì",
    options: [
      { key: "A", text: "đảm bảo hệ thống điện hoạt động liên tục." },
      { key: "B", text: "tạo ra thiết bị mới." },
      { key: "C", text: "thiết kế công trình." },
      { key: "D", text: "kinh doanh điện năng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 15 (Trang 5)",
    question: "Bảo dưỡng điện giúp",
    options: [
      { key: "A", text: "tăng sự cố hệ thống." },
      { key: "B", text: "giảm tuổi thọ thiết bị." },
      { key: "C", text: "duy trì hoạt động ổn định của hệ thống điện." },
      { key: "D", text: "làm tăng chi phí không cần thiết." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 16 (Trang 5)",
    question: "Trong thực tế, kỹ sư điện thường làm việc tại",
    options: [
      { key: "A", text: "công ty thời trang." },
      { key: "B", text: "nhà máy, công trình điện." },
      { key: "C", text: "tiệm ăn." },
      { key: "D", text: "ngân hàng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 17 (Trang 6)",
    question: "Thiết kế điện liên quan đến",
    options: [
      { key: "A", text: "lập bản vẽ và tính toán hệ thống điện." },
      { key: "B", text: "nấu ăn." },
      { key: "C", text: "kinh doanh sản phẩm." },
      { key: "D", text: "vận chuyển hàng hóa." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 18 (Trang 6)",
    question: "Sản xuất thiết bị điện cần",
    options: [
      { key: "A", text: "dây chuyền công nghệ và máy móc hiện đại." },
      { key: "B", text: "hoàn toàn lao động thủ công." },
      { key: "C", text: "không cần quy trình." },
      { key: "D", text: "chỉ cần ý tưởng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 19 (Trang 6)",
    question: "Công việc lắp đặt điện thường được thực hiện",
    options: [
      { key: "A", text: "trong phòng thí nghiệm hóa học." },
      { key: "B", text: "ngoài hiện trường công trình." },
      { key: "C", text: "trong văn phòng tài chính." },
      { key: "D", text: "trong phòng họp." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 20 (Trang 6)",
    question: "Vận hành hệ thống điện cần",
    options: [
      { key: "A", text: "kỹ năng quản lý và giám sát hệ thống." },
      { key: "B", text: "chỉ cần sức khỏe." },
      { key: "C", text: "không cần đào tạo." },
      { key: "D", text: "chỉ cần kinh nghiệm bán hàng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 21 (Trang 6)",
    question: "Một kỹ sư thiết kế hệ thống điện cho nhà máy cần ưu tiên",
    options: [
      { key: "A", text: "thẩm mỹ công trình." },
      { key: "B", text: "chi phí thấp nhất mà không cần an toàn." },
      { key: "C", text: "an toàn và hiệu quả vận hành." },
      { key: "D", text: "màu sắc thiết bị." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 22 (Trang 6)",
    question: "Trong thực tế, việc lắp đặt điện sai kỹ thuật có thể gây",
    options: [
      { key: "A", text: "tăng hiệu quả sản xuất." },
      { key: "B", text: "tiết kiệm điện năng." },
      { key: "C", text: "nguy cơ chập cháy điện." },
      { key: "D", text: "giảm chi phí bảo trì." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 23 (Trang 6)",
    question: "Một nhà máy muốn tăng năng suất nên",
    options: [
      { key: "A", text: "giảm tự động hóa." },
      { key: "B", text: "sử dụng thiết bị điện hiện đại." },
      { key: "C", text: "dùng hoàn toàn thủ công." },
      { key: "D", text: "ngừng sản xuất." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 24 (Trang 6)",
    question: "Trong hệ thống điện thông minh, dữ liệu được dùng để",
    options: [
      { key: "A", text: "điều khiển và tối ưu vận hành." },
      { key: "B", text: "trang trí giao diện." },
      { key: "C", text: "in tài liệu." },
      { key: "D", text: "thay thế con người hoàn toàn." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 25 (Trang 6)",
    question: "Một khu công nghiệp muốn giảm sự cố điện, giải pháp phù hợp nhất là",
    options: [
      { key: "A", text: "bỏ hệ thống giám sát." },
      { key: "B", text: "tăng số lượng công nhân thủ công." },
      { key: "C", text: "áp dụng hệ thống giám sát và bảo trì thông minh." },
      { key: "D", text: "giảm kiểm tra thiết bị." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 26 (Trang 6)",
    question: "Khi thiết kế hệ thống điện cho đô thị thông minh, yếu tố quan trọng nhất là",
    options: [
      { key: "A", text: "màu sắc thiết bị." },
      { key: "B", text: "độ an toàn và khả năng mở rộng hệ thống." },
      { key: "C", text: "giá trị thẩm mỹ." },
      { key: "D", text: "số lượng dây điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 27 (Trang 6)",
    question: "Trong sản xuất thiết bị điện, tự động hóa giúp",
    options: [
      { key: "A", text: "giảm năng suất." },
      { key: "B", text: "tăng sai sót." },
      { key: "C", text: "nâng cao hiệu quả sản xuất." },
      { key: "D", text: "giảm chất lượng sản phẩm." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 28 (Trang 6)",
    question: "Khi bảo dưỡng hệ thống điện, mục tiêu là",
    options: [
      { key: "A", text: "làm hệ thống ngừng hoạt động." },
      { key: "B", text: "phát hiện và khắc phục sự cố kịp thời." },
      { key: "C", text: "thay thế toàn bộ thiết bị." },
      { key: "D", text: "tăng tiêu hao điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 29 (Trang 6)",
    question: "Trong thực tế, nghề lắp đặt điện yêu cầu",
    options: [
      { key: "A", text: "kỹ năng thực hành và an toàn lao động." },
      { key: "B", text: "chỉ học lý thuyết." },
      { key: "C", text: "không cần dụng cụ." },
      { key: "D", text: "chỉ cần quan sát." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 2", type: "mc", source: "Bài 2 - Câu 30 (Trang 7)",
    question: "Xu hướng phát triển nghề điện hiện nay là",
    options: [
      { key: "A", text: "tăng tự động hóa và số hóa." },
      { key: "B", text: "quay lại thủ công." },
      { key: "C", text: "giảm ứng dụng công nghệ." },
      { key: "D", text: "giảm an toàn lao động." }
    ],
    correct: "A"
  },
  // --- 6 Câu Đúng / Sai ---
  {
    topic: "BÀI 2", type: "tf", source: "Bài 2 - Phần II - Câu 1 (Trang 7)",
    question: "Trong buổi học định hướng nghề nghiệp kĩ thuật điện, các nhận định sau được đưa ra để thảo luận:",
    items: [
      { key: "a", text: "Thiết kế điện là một trong các nhóm nghề thuộc lĩnh vực kĩ thuật điện.", correct: true },
      { key: "b", text: "Sản xuất thiết bị điện thuộc lĩnh vực công nghiệp chế tạo.", correct: true },
      { key: "c", text: "Nghề kế toán thuộc nhóm nghề kĩ thuật điện.", correct: false },
      { key: "d", text: "Lắp đặt điện là công việc không liên quan đến hệ thống điện.", correct: false }
    ]
  },
  {
    topic: "BÀI 2", type: "tf", source: "Bài 2 - Phần II - Câu 2 (Trang 7)",
    question: "Về yêu cầu kiến thức và công cụ đối với nghề thiết kế điện, xét các nhận định sau:",
    items: [
      { key: "a", text: "Người thiết kế điện cần hiểu sơ đồ hệ thống điện và tiêu chuẩn kỹ thuật.", correct: true },
      { key: "b", text: "Công việc thiết kế điện chỉ cần kinh nghiệm thực tế, không cần kiến thức chuyên môn.", correct: false },
      { key: "c", text: "Thiết kế điện có thể sử dụng phần mềm hỗ trợ mô phỏng và thiết kế.", correct: true },
      { key: "d", text: "Thiết kế điện không liên quan đến an toàn hệ thống điện.", correct: false }
    ]
  },
  {
    topic: "BÀI 2", type: "tf", source: "Bài 2 - Phần II - Câu 3 (Trang 7)",
    question: "Tìm hiểu về công việc lắp đặt điện thực tế, đánh giá các nội dung sau:",
    items: [
      { key: "a", text: "Lắp đặt điện chỉ thực hiện trong phòng thí nghiệm.", correct: false },
      { key: "b", text: "Lắp đặt điện cần đọc hiểu bản vẽ và sơ đồ kỹ thuật.", correct: true },
      { key: "c", text: "Lắp đặt điện được thực hiện trực tiếp tại công trình.", correct: true },
      { key: "d", text: "Lắp đặt điện không cần tuân thủ quy trình an toàn.", correct: false }
    ]
  },
  {
    topic: "BÀI 2", type: "tf", source: "Bài 2 - Phần II - Câu 4 (Trang 7)",
    question: "Trong hoạt động sản xuất thiết bị điện công nghiệp hiện đại, các phát biểu sau đúng hay sai:",
    items: [
      { key: "a", text: "Sản xuất thiết bị điện thường được thực hiện trên dây chuyền công nghiệp.", correct: true },
      { key: "b", text: "Sản xuất thiết bị điện không cần máy móc hiện đại.", correct: false },
      { key: "c", text: "Kiểm soát chất lượng là một phần quan trọng trong sản xuất thiết bị điện.", correct: true },
      { key: "d", text: "Tự động hóa giúp nâng cao hiệu quả sản xuất thiết bị điện.", correct: true }
    ]
  },
  {
    topic: "BÀI 2", type: "tf", source: "Bài 2 - Phần II - Câu 5 (Trang 7-8)",
    question: "Khi khu công nghiệp áp dụng mô hình sản xuất thông minh, đánh giá các nhận định:",
    items: [
      { key: "a", text: "Việc ứng dụng hệ thống tự động giúp tối ưu hóa hoạt động sản xuất thiết bị điện.", correct: true },
      { key: "b", text: "Hệ thống giám sát giúp phát hiện và giảm thiểu sự cố trong dây chuyền sản xuất.", correct: true },
      { key: "c", text: "Nhà máy thông minh không cần kỹ sư điện trong vận hành.", correct: false },
      { key: "d", text: "Tự động hóa làm giảm hoàn toàn vai trò của con người trong sản xuất.", correct: false }
    ]
  },
  {
    topic: "BÀI 2", type: "tf", source: "Bài 2 - Phần II - Câu 6 (Trang 8)",
    question: "Về nhu cầu nhân lực cho hệ thống điện đô thị thông minh, đánh giá các nhận định:",
    items: [
      { key: "a", text: "Kỹ sư thiết kế điện cần kiến thức về hệ thống điện và điều khiển tự động.", correct: true },
      { key: "b", text: "Kỹ thuật viên điện cần sử dụng phần mềm thiết kế và hỗ trợ kỹ thuật.", correct: true },
      { key: "c", text: "Người vận hành hệ thống không cần kỹ năng giám sát thời gian thực.", correct: false },
      { key: "d", text: "Vận hành hệ thống điện thông minh yêu cầu theo dõi và xử lý dữ liệu liên tục.", correct: true }
    ]
  },

  // ==========================================
  // BÀI 3: MẠCH ĐIỆN XOAY CHIỀU BA PHA
  // ==========================================
  // --- 30 Câu Trắc Nghiệm ---
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 1 (Trang 8)",
    question: "Dòng điện xoay chiều ba pha gồm bao nhiêu dòng điện xoay chiều?",
    options: [
      { key: "A", text: "1 dòng." },
      { key: "B", text: "2 dòng." },
      { key: "C", text: "3 dòng." },
      { key: "D", text: "4 dòng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 2 (Trang 8)",
    question: "Góc lệch pha giữa các pha trong hệ thống ba pha là",
    options: [
      { key: "A", text: "60°." },
      { key: "B", text: "90°." },
      { key: "C", text: "120°." },
      { key: "D", text: "180°." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 3 (Trang 8)",
    question: "Trong hệ thống ba pha đối xứng, các pha có đặc điểm nào?",
    options: [
      { key: "A", text: "Cùng biên độ, cùng pha." },
      { key: "B", text: "Khác biên độ, cùng pha." },
      { key: "C", text: "Cùng biên độ, lệch pha nhau." },
      { key: "D", text: "Khác tần số." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 4 (Trang 8)",
    question: "Máy phát điện xoay chiều ba pha có phần quay gọi là",
    options: [
      { key: "A", text: "stato." },
      { key: "B", text: "rôto." },
      { key: "C", text: "cuộn dây." },
      { key: "D", text: "lõi thép." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 5 (Trang 8)",
    question: "Trong hệ thống điện ba pha, số dây trung tính trong nối hình sao có thể là",
    options: [
      { key: "A", text: "0 hoặc 1." },
      { key: "B", text: "2." },
      { key: "C", text: "3." },
      { key: "D", text: "4." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 6 (Trang 8)",
    question: "Trong sơ đồ máy phát điện ba pha, cuộn dây AX, BY, CZ lệch nhau bao nhiêu độ?",
    options: [
      { key: "A", text: "90°." },
      { key: "B", text: "60°." },
      { key: "C", text: "120°." },
      { key: "D", text: "180°." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 7 (Trang 8)",
    question: "Đơn vị của tần số dòng điện xoay chiều là",
    options: [
      { key: "A", text: "Volt (V)." },
      { key: "B", text: "Ampe (A)." },
      { key: "C", text: "Hertz (Hz)." },
      { key: "D", text: "Ohm (Ω)." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 8 (Trang 8)",
    question: "Trong mạch điện xoay chiều ba pha, tải có thể đấu nối theo kiểu",
    options: [
      { key: "A", text: "hình tròn." },
      { key: "B", text: "hình vuông." },
      { key: "C", text: "hình sao hoặc tam giác." },
      { key: "D", text: "hình chữ nhật." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 9 (Trang 8)",
    question: "Dòng điện pha trong mạch ba pha đối xứng có quan hệ với dòng điện dây trong nối sao là",
    options: [
      { key: "A", text: "Id = Ip." },
      { key: "B", text: "Id = 2Ip." },
      { key: "C", text: "Id = Ip/2." },
      { key: "D", text: "Id = √3 Ip." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 10 (Trang 8)",
    question: "Điện áp dây trong mạch ba pha đối xứng nối sao được tính theo",
    options: [
      { key: "A", text: "Ud = Up." },
      { key: "B", text: "Ud = √3 Up." },
      { key: "C", text: "Ud = 2Up." },
      { key: "D", text: "Ud = Up/√3." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 11 (Trang 8)",
    question: "Vì sao hệ thống điện ba pha được sử dụng phổ biến trong truyền tải điện?",
    options: [
      { key: "A", text: "Vì rẻ tiền." },
      { key: "B", text: "Vì dễ chế tạo." },
      { key: "C", text: "Vì hiệu suất cao và tiết kiệm dây dẫn." },
      { key: "D", text: "Vì không cần biến áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 12 (Trang 8-9)",
    question: "Trong máy phát điện ba pha, vì sao các cuộn dây đặt lệch nhau 120°?",
    options: [
      { key: "A", text: "Để giảm kích thước máy." },
      { key: "B", text: "Để tạo ra dòng điện một chiều." },
      { key: "C", text: "Để tạo ba sức điện động lệch pha nhau." },
      { key: "D", text: "Để tăng điện trở." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 13 (Trang 9)",
    question: "Khi nối tải hình tam giác, đặc điểm điện áp pha là",
    options: [
      { key: "A", text: "Ud = Up." },
      { key: "B", text: "Ud = 2Up." },
      { key: "C", text: "Ud = Up/2." },
      { key: "D", text: "Ud = √3 Up." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 14 (Trang 9)",
    question: "Trong thực tế, động cơ điện ba pha được sử dụng vì",
    options: [
      { key: "A", text: "giá rẻ." },
      { key: "B", text: "hoạt động không cần điện." },
      { key: "C", text: "công suất lớn, vận hành ổn định." },
      { key: "D", text: "không cần bảo trì." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 15 (Trang 9)",
    question: "Một tải ba pha đối xứng nối hình sao có Up = 127 V, Ip = 5 A. Xác định dòng điện dây và điện áp dây:",
    options: [
      { key: "A", text: "Id = 5 A; Ud = 220 V." },
      { key: "B", text: "Id = 8,66 A; Ud = 220 V." },
      { key: "C", text: "Id = 5 A; Ud = 380 V." },
      { key: "D", text: "Id = 8,66 A; Ud = 127 V." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 16 (Trang 9)",
    question: "Cho sơ đồ mạch điện ba pha, điện áp trên các tải Up = 220V. Cho biết cách nối tải và xác định điện áp dây đặt lên tải:",
    options: [
      { key: "A", text: "Tải ba pha nối hình tam giác, Ud = 380 V." },
      { key: "B", text: "Tải ba pha nối hình sao, Ud = 380 V." },
      { key: "C", text: "Tải ba pha nối hình sao có dây trung tính, Ud = 220 V." },
      { key: "D", text: "Tải ba pha nối hình sao có dây trung tính, Ud = 380 V." }
    ],
    correct: "D"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 17 (Trang 9)",
    question: "Tải ba pha đối xứng gồm 3 điện trở R = 15 Ω nối tam giác, đấu vào nguồn ba pha có Ud = 380V. Dòng điện pha và dòng điện dây là:",
    options: [
      { key: "A", text: "Ip = 25,33 A; Id = 43,9 A." },
      { key: "B", text: "Ip = 10 A; Id = 17,3 A." },
      { key: "C", text: "Ip = 19 A; Id = 19 A." },
      { key: "D", text: "Ip = 43,9 A; Id = 25,33 A." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 18 (Trang 9)",
    question: "Tần số dòng điện xoay chiều công nghiệp ở Việt Nam là",
    options: [
      { key: "A", text: "25 Hz." },
      { key: "B", text: "50 Hz." },
      { key: "C", text: "60 Hz." },
      { key: "D", text: "100 Hz." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 19 (Trang 9)",
    question: "Trong hệ thống ba pha, ưu điểm quan trọng của nối hình sao có dây trung tính là",
    options: [
      { key: "A", text: "tăng điện áp." },
      { key: "B", text: "cân bằng tải." },
      { key: "C", text: "cung cấp điện cho tải một pha." },
      { key: "D", text: "giảm tần số." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 20 (Trang 9)",
    question: "Máy phát điện ba pha hoạt động dựa trên nguyên lí",
    options: [
      { key: "A", text: "quang điện." },
      { key: "B", text: "cảm ứng điện từ." },
      { key: "C", text: "hóa học." },
      { key: "D", text: "nhiệt điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 21 (Trang 9)",
    question: "Một xưởng sản xuất sử dụng động cơ ba pha thay vì một pha vì",
    options: [
      { key: "A", text: "tiết kiệm diện tích." },
      { key: "B", text: "giảm tiếng ồn." },
      { key: "C", text: "công suất lớn và ổn định hơn." },
      { key: "D", text: "không cần điện áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 22 (Trang 9-10)",
    question: "Một nhà máy cần truyền tải công suất lớn đi xa. Giải pháp tối ưu là",
    options: [
      { key: "A", text: "dùng điện một chiều." },
      { key: "B", text: "dùng điện ba pha và tăng điện áp truyền tải." },
      { key: "C", text: "dùng pin dự phòng." },
      { key: "D", text: "giảm điện áp truyền tải." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 23 (Trang 10)",
    question: "Tải ba pha gồm 3 điện trở R = 50 Ω nối tam giác, cấp bởi nguồn ba pha Ud = 380V. Dòng điện pha của tải gần bằng:",
    options: [
      { key: "A", text: "10,4 A." },
      { key: "B", text: "5,2 A." },
      { key: "C", text: "3,8 A." },
      { key: "D", text: "7,6 A." }
    ],
    correct: "D"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 24 (Trang 10)",
    question: "Đâu là hình đúng khi giới thiệu cách nối tải 3 pha hình tam giác?",
    options: [
      { key: "A", text: "Hình 1." },
      { key: "B", text: "Hình 2." },
      { key: "C", text: "Hình 3." },
      { key: "D", text: "Hình 4." }
    ],
    correct: "D"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 25 (Trang 10)",
    question: "Một tải ba pha nối tam giác có điện áp dây bằng 380V. Điện áp pha là",
    options: [
      { key: "A", text: "220V." },
      { key: "B", text: "380V." },
      { key: "C", text: "110V." },
      { key: "D", text: "660V." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 26 (Trang 10)",
    question: "Một khu công nghiệp dùng hệ thống ba pha cân bằng để",
    options: [
      { key: "A", text: "tăng hao phí điện." },
      { key: "B", text: "giảm hiệu suất." },
      { key: "C", text: "tối ưu truyền tải điện năng." },
      { key: "D", text: "giảm công suất thiết bị." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 27 (Trang 10)",
    question: "Đâu là hình đúng khi giới thiệu cách nối nguồn 3 pha hình sao không có dây trung tính?",
    options: [
      { key: "A", text: "Hình 1." },
      { key: "B", text: "Hình 2." },
      { key: "C", text: "Hình 3." },
      { key: "D", text: "Hình 4." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 28 (Trang 10)",
    question: "Trong lưới điện thông minh, việc giám sát pha giúp",
    options: [
      { key: "A", text: "tăng chi phí." },
      { key: "B", text: "phát hiện mất cân bằng tải." },
      { key: "C", text: "giảm điện áp." },
      { key: "D", text: "tăng tần số." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 29 (Trang 10)",
    question: "Quan sát sơ đồ mạch điện ba pha trên hình, đây là cách đấu nối nguồn và tải kiểu",
    options: [
      { key: "A", text: "nối 4 dây song song." },
      { key: "B", text: "nối sao - sao." },
      { key: "C", text: "nối hình sao có dây trung tính." },
      { key: "D", text: "nối tam giác và tam giác." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 3", type: "mc", source: "Bài 3 - Câu 30 (Trang 10-11)",
    question: "Hệ thống điện ba pha cấp cho tải thuần trở R = 50 Ω nối tam giác, nguồn có Ud = 380V. Dòng điện dây của hệ thống gần bằng:",
    options: [
      { key: "A", text: "8,8 A." },
      { key: "B", text: "13,1 A." },
      { key: "C", text: "22,0 A." },
      { key: "D", text: "15,2 A." }
    ],
    correct: "B"
  },
  // --- 6 Câu Đúng / Sai ---
  {
    topic: "BÀI 3", type: "tf", source: "Bài 3 - Phần II - Câu 1 (Trang 11)",
    question: "Phân tích đặc trưng hệ thống điện ba pha qua đồ thị hình sin, đánh giá các phát biểu:",
    items: [
      { key: "a", text: "Dòng điện xoay chiều ba pha gồm ba dòng điện có cùng tần số.", correct: true },
      { key: "b", text: "Ba dòng điện ba pha luôn cùng pha nhau trong mọi trường hợp.", correct: false },
      { key: "c", text: "Ba dòng điện ba pha lệch nhau một góc 120°.", correct: true },
      { key: "d", text: "Hệ ba pha được tạo ra từ một nguồn duy nhất nhưng có ba cuộn dây.", correct: true }
    ]
  },
  {
    topic: "BÀI 3", type: "tf", source: "Bài 3 - Phần II - Câu 2 (Trang 11)",
    question: "Về cấu tạo máy phát điện xoay chiều ba pha, xét tính đúng/sai:",
    items: [
      { key: "a", text: "Stato gồm ba cuộn dây AX, BY, CZ đặt lệch nhau 120°.", correct: true },
      { key: "b", text: "Roto là phần đứng yên của máy phát.", correct: false },
      { key: "c", text: "Dòng điện ba pha được tạo ra do hiện tượng cảm ứng điện từ.", correct: true },
      { key: "d", text: "Ba cuộn dây trong stato hoàn toàn giống nhau về kích thước và số vòng dây.", correct: true }
    ]
  },
  {
    topic: "BÀI 3", type: "tf", source: "Bài 3 - Phần II - Câu 3 (Trang 11)",
    question: "Động cơ điện ba pha có nhãn Y/Δ - 380/220 V; 10,16/17,6 A, dùng điện lưới có Ud = 220V. Đâu là câu trả lời đúng?",
    items: [
      { key: "a", text: "Các pha của động cơ phải nối hình tam giác; dòng điện dây Id = 17,6 A và dòng điện pha Ip = 10,16 A.", correct: true },
      { key: "b", text: "Các pha của động cơ phải nối hình sao; dòng điện dây Id = 17,6 A và dòng điện pha Ip = 10,16 A.", correct: false },
      { key: "c", text: "Với ký hiệu Y/Δ - 380/220 V, các pha của động cơ chỉ được nối hình sao khi điện áp lưới có Ud = 380 V.", correct: true },
      { key: "d", text: "Ký hiệu 10,16/17,6 A dùng để chỉ giá trị dòng pha và dòng điện dây tương ứng khi nối hình sao.", correct: false }
    ]
  },
  {
    topic: "BÀI 3", type: "tf", source: "Bài 3 - Phần II - Câu 4 (Trang 11-12)",
    question: "Nguồn 3 pha 4 dây 380/220V cấp cho 6 bóng đèn (60W-220V) và máy bơm 3 pha (2,2kW-380V). Để hệ thống đối xứng:",
    items: [
      { key: "a", text: "Sáu bóng đèn nên được chia đều thành ba nhóm, mỗi nhóm gồm hai bóng mắc song song giữa một dây pha và dây trung tính.", correct: true },
      { key: "b", text: "Máy bơm nước ba pha phải được nối vào ba dây pha của nguồn điện 380 V, không cần nối với dây trung tính.", correct: true },
      { key: "c", text: "Dòng điện chạy qua mỗi pha của nhóm bóng đèn có giá trị khoảng 0,55 A.", correct: true },
      { key: "d", text: "Để máy bơm hoạt động đúng điện áp định mức 380 V, cần mắc mỗi pha của động cơ giữa một dây pha và dây trung tính.", correct: false }
    ]
  },
  {
    topic: "BÀI 3", type: "tf", source: "Bài 3 - Phần II - Câu 5 (Trang 12)",
    question: "Mạch ba pha bốn dây Ud = 380V; tải lò điện trở ba pha có R = 19 Ω. Nhận định về mạch điện:",
    items: [
      { key: "a", text: "Tải được nối hình sao có dây trung tính.", correct: true },
      { key: "b", text: "Điện áp pha được xác định bằng công thức: Up = Ud / √3.", correct: true },
      { key: "c", text: "Khi lò điện trở hoạt động, dòng điện pha là 20 A.", correct: true },
      { key: "d", text: "Khi tải làm việc với cách nối hình tam giác, dòng điện dây là 40 A.", correct: false }
    ]
  },
  {
    topic: "BÀI 3", type: "tf", source: "Bài 3 - Phần II - Câu 6 (Trang 12)",
    question: "Nguồn ba pha 380/220V cấp cho lò sấy có Up định mức 220V, R = 80 Ω nối hình sao. Nhận định về mạch:",
    items: [
      { key: "a", text: "Tải được nối hình sao.", correct: true },
      { key: "b", text: "Quan hệ giữa dòng điện dây và dòng điện pha là Id = √3 Ip.", correct: false },
      { key: "c", text: "Khi lò sấy hoạt động, dòng điện pha là 2,75 A.", correct: true },
      { key: "d", text: "Khi tải nối hình tam giác, mạch điện vẫn hoạt động bình thường.", correct: false }
    ]
  },

  // ==========================================
  // BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA
  // ==========================================
  // --- 30 Câu Trắc Nghiệm ---
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 1 (Trang 13)",
    question: "Hệ thống điện quốc gia gồm các thành phần chính nào?",
    options: [
      { key: "A", text: "Nguồn điện, lưới điện, tải tiêu thụ." },
      { key: "B", text: "Nhà máy điện, trường học, hộ gia đình." },
      { key: "C", text: "Trạm bơm, đường ống, mạng nước." },
      { key: "D", text: "Thiết bị điện dân dụng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 2 (Trang 13)",
    question: "Nguồn điện trong hệ thống điện quốc gia có chức năng gì?",
    options: [
      { key: "A", text: "Tiêu thụ điện năng." },
      { key: "B", text: "Truyền tải điện." },
      { key: "C", text: "Sản xuất và cung cấp điện năng." },
      { key: "D", text: "Phân phối điện cho hộ dân." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 3 (Trang 13)",
    question: "Lưới điện có vai trò chính là",
    options: [
      { key: "A", text: "sản xuất điện năng." },
      { key: "B", text: "truyền tải và phân phối điện năng." },
      { key: "C", text: "tiêu thụ điện năng." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 4 (Trang 13)",
    question: "Tải tiêu thụ điện gồm:",
    options: [
      { key: "A", text: "nhà máy điện." },
      { key: "B", text: "đường dây truyền tải." },
      { key: "C", text: "hộ gia đình, công nghiệp, thương mại." },
      { key: "D", text: "trạm biến áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 5 (Trang 13)",
    question: "Điện áp nào thuộc lưới điện trung áp?",
    options: [
      { key: "A", text: "0,4 kV." },
      { key: "B", text: "6 kV – 22 kV." },
      { key: "C", text: "220 kV." },
      { key: "D", text: "500 kV." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 6 (Trang 13)",
    question: "Điện áp 110 kV thuộc loại lưới điện nào?",
    options: [
      { key: "A", text: "Hạ áp." },
      { key: "B", text: "Trung áp." },
      { key: "C", text: "Cao áp." },
      { key: "D", text: "Siêu cao áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 7 (Trang 13)",
    question: "Trạm biến áp có chức năng chính là",
    options: [
      { key: "A", text: "sản xuất điện." },
      { key: "B", text: "biến đổi điện áp." },
      { key: "C", text: "tiêu thụ điện." },
      { key: "D", text: "lưu trữ điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 8 (Trang 13)",
    question: "Tải tiêu thụ điện gia đình thường sử dụng điện áp",
    options: [
      { key: "A", text: "0,4 kV." },
      { key: "B", text: "22 kV." },
      { key: "C", text: "110 kV." },
      { key: "D", text: "220 kV." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 9 (Trang 13)",
    question: "Nhà máy điện thuộc thành phần nào của hệ thống điện?",
    options: [
      { key: "A", text: "Lưới điện." },
      { key: "B", text: "Tải tiêu thụ." },
      { key: "C", text: "Nguồn điện." },
      { key: "D", text: "Phân phối điện." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 10 (Trang 13)",
    question: "Thiết bị dùng để kết nối và nâng/hạ điện áp trong hệ thống là",
    options: [
      { key: "A", text: "máy phát điện." },
      { key: "B", text: "trạm biến áp." },
      { key: "C", text: "bóng đèn." },
      { key: "D", text: "động cơ điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 11 (Trang 13)",
    question: "Trong sơ đồ hệ thống điện quốc gia, trình tự đúng là:",
    options: [
      { key: "A", text: "nguồn điện → tải tiêu thụ → lưới điện." },
      { key: "B", text: "nguồn điện → lưới điện → tải tiêu thụ." },
      { key: "C", text: "lưới điện → nguồn điện → tải tiêu thụ." },
      { key: "D", text: "tải tiêu thụ → lưới điện → nguồn điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 12 (Trang 13-14)",
    question: "Vì sao điện phải truyền ở điện áp cao?",
    options: [
      { key: "A", text: "Giảm tổn thất điện năng trên đường dây." },
      { key: "B", text: "Tăng tiêu thụ điện." },
      { key: "C", text: "Giảm công suất nhà máy." },
      { key: "D", text: "Làm tăng điện trở." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 13 (Trang 14)",
    question: "Trong thực tế, điện từ nhà máy điện trước khi đến hộ dân phải qua",
    options: [
      { key: "A", text: "máy phát → tivi → bóng đèn." },
      { key: "B", text: "trạm biến áp và lưới điện." },
      { key: "C", text: "pin mặt trời." },
      { key: "D", text: "động cơ điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 14 (Trang 14)",
    question: "Lưới điện phân phối có nhiệm vụ",
    options: [
      { key: "A", text: "truyền điện từ nhà máy ra quốc tế." },
      { key: "B", text: "đưa điện đến người tiêu dùng." },
      { key: "C", text: "sản xuất điện." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 15 (Trang 14)",
    question: "Sự khác nhau chính giữa truyền tải và phân phối điện là",
    options: [
      { key: "A", text: "công suất nhà máy." },
      { key: "B", text: "cấp điện áp và phạm vi cung cấp." },
      { key: "C", text: "màu dây điện." },
      { key: "D", text: "loại bóng đèn." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 16 (Trang 14)",
    question: "Một khu công nghiệp sử dụng điện 22 kV. Điều này cho thấy khu vực thuộc",
    options: [
      { key: "A", text: "lưới điện hạ áp." },
      { key: "B", text: "lưới điện trung áp." },
      { key: "C", text: "lưới điện dân dụng 0,4 kV." },
      { key: "D", text: "thiết bị điện tử." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 17 (Trang 14)",
    question: "Trạm biến áp 110/22 kV có nhiệm vụ",
    options: [
      { key: "A", text: "tăng điện áp từ 22 lên 110 kV." },
      { key: "B", text: "giảm điện áp từ 110 xuống 22 kV." },
      { key: "C", text: "tạo ra điện năng." },
      { key: "D", text: "tiêu thụ điện năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 18 (Trang 14)",
    question: "Trong hệ thống điện, nếu không có lưới điện thì",
    options: [
      { key: "A", text: "điện vẫn truyền ổn định." },
      { key: "B", text: "điện không thể truyền đến nơi tiêu thụ." },
      { key: "C", text: "nhà máy điện dừng hoạt động." },
      { key: "D", text: "điện tự lưu trữ." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 19 (Trang 14)",
    question: "Việc sử dụng điện 0,4 kV trong gia đình nhằm",
    options: [
      { key: "A", text: "tăng tổn thất điện." },
      { key: "B", text: "đảm bảo an toàn cho người dùng." },
      { key: "C", text: "tăng điện áp truyền tải." },
      { key: "D", text: "thay thế trạm biến áp." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 20 (Trang 14)",
    question: "Trong thực tế, trung tâm điều độ hệ thống điện có vai trò",
    options: [
      { key: "A", text: "sản xuất điện." },
      { key: "B", text: "điều phối, vận hành hệ thống điện quốc gia." },
      { key: "C", text: "tiêu thụ điện." },
      { key: "D", text: "sửa bóng đèn." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 21 (Trang 14)",
    question: "Một khu đô thị mới cần cấp điện ổn định, giải pháp phù hợp là",
    options: [
      { key: "A", text: "chỉ dùng pin mặt trời cá nhân." },
      { key: "B", text: "kết nối vào lưới điện phân phối." },
      { key: "C", text: "ngắt hệ thống điện quốc gia." },
      { key: "D", text: "dùng máy phát nhỏ lẻ." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 22 (Trang 14)",
    question: "Khi truyền tải điện đi xa, người ta tăng điện áp nhằm",
    options: [
      { key: "A", text: "giảm dòng điện." },
      { key: "B", text: "tăng tổn thất." },
      { key: "C", text: "tăng nhiệt dây dẫn." },
      { key: "D", text: "giảm hiệu suất." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 23 (Trang 14)",
    question: "Một nhà máy muốn giảm chi phí truyền tải điện nên",
    options: [
      { key: "A", text: "giảm điện áp truyền tải." },
      { key: "B", text: "tăng điện áp truyền tải." },
      { key: "C", text: "ngắt hệ thống." },
      { key: "D", text: "dùng điện pin." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 24 (Trang 14)",
    question: "Trong gia đình, thiết bị nào thuộc tải tiêu thụ?",
    options: [
      { key: "A", text: "Trạm biến áp." },
      { key: "B", text: "Bóng đèn." },
      { key: "C", text: "Đường dây 110 kV." },
      { key: "D", text: "Nhà máy điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 25 (Trang 14-15)",
    question: "Một quốc gia muốn tối ưu hệ thống điện, giải pháp quan trọng nhất là",
    options: [
      { key: "A", text: "tăng số bóng đèn." },
      { key: "B", text: "phát triển đồng bộ nguồn – lưới – tải." },
      { key: "C", text: "giảm nhà máy điện." },
      { key: "D", text: "bỏ trạm biến áp." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 26 (Trang 15)",
    question: "Một khu vực miền núi xa gặp tình trạng điện yếu do đường dây dài. Giải pháp kỹ thuật hợp lí là",
    options: [
      { key: "A", text: "giảm điện áp truyền tải." },
      { key: "B", text: "tăng điện áp truyền tải và dùng trạm biến áp trung gian." },
      { key: "C", text: "bỏ điện lưới." },
      { key: "D", text: "chỉ dùng điện pin." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 27 (Trang 15)",
    question: "Khi điện áp từ 220 kV giảm xuống 22 kV, thiết bị thực hiện là",
    options: [
      { key: "A", text: "máy phát điện." },
      { key: "B", text: "trạm biến áp hạ áp." },
      { key: "C", text: "bóng đèn." },
      { key: "D", text: "động cơ." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 28 (Trang 15)",
    question: "Việc phân bố điện năng hợp lí trong hệ thống điện giúp",
    options: [
      { key: "A", text: "tăng mất mát điện." },
      { key: "B", text: "đảm bảo ổn định hệ thống." },
      { key: "C", text: "giảm sản xuất." },
      { key: "D", text: "ngắt điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 29 (Trang 15)",
    question: "Nếu phụ tải tăng đột ngột, hệ thống điện cần",
    options: [
      { key: "A", text: "điều độ và cân bằng nguồn điện." },
      { key: "B", text: "tắt toàn bộ hệ thống." },
      { key: "C", text: "giảm điện áp về 0." },
      { key: "D", text: "bỏ lưới điện." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 4", type: "mc", source: "Bài 4 - Câu 30 (Trang 15)",
    question: "Vai trò quan trọng nhất của hệ thống điện quốc gia là",
    options: [
      { key: "A", text: "cung cấp điện ổn định cho sản xuất và đời sống." },
      { key: "B", text: "chỉ phục vụ nhà máy điện." },
      { key: "C", text: "lưu trữ điện năng." },
      { key: "D", text: "tạo ra ánh sáng." }
    ],
    correct: "A"
  },
  // --- 6 Câu Đúng / Sai ---
  {
    topic: "BÀI 4", type: "tf", source: "Bài 4 - Phần II - Câu 1 (Trang 15)",
    question: "Tìm hiểu các thành phần và chức năng của hệ thống điện quốc gia, đánh giá các nhận định:",
    items: [
      { key: "a", text: "Hệ thống điện quốc gia gồm ba thành phần chính nguồn điện, lưới điện và tải tiêu thụ.", correct: true },
      { key: "b", text: "Lưới điện có chức năng truyền tải và phân phối điện năng từ nguồn đến nơi tiêu thụ.", correct: true },
      { key: "c", text: "Nhà máy điện thuộc nhóm tải tiêu thụ điện năng.", correct: false },
      { key: "d", text: "Trạm biến áp có chức năng trực tiếp sản xuất điện năng.", correct: false }
    ]
  },
  {
    topic: "BÀI 4", type: "tf", source: "Bài 4 - Phần II - Câu 2 (Trang 15)",
    question: "Phân loại các cấp điện áp của lưới điện quốc gia, xác định tính đúng/sai:",
    items: [
      { key: "a", text: "Điện áp 0,4 kV thuộc lưới điện hạ áp.", correct: true },
      { key: "b", text: "Lưới điện trung áp thường có cấp điện áp từ 1 kV đến 35 kV.", correct: true },
      { key: "c", text: "Lưới điện cao áp thường có cấp điện áp từ 110 kV trở lên.", correct: true },
      { key: "d", text: "Siêu cao áp là các cấp điện áp nhỏ hơn 1 kV.", correct: false }
    ]
  },
  {
    topic: "BÀI 4", type: "tf", source: "Bài 4 - Phần II - Câu 3 (Trang 15-16)",
    question: "Về vai trò điều độ và tối ưu vận hành hệ thống điện quốc gia giờ cao điểm:",
    items: [
      { key: "a", text: "Tăng điện áp truyền tải giúp giảm tổn thất công suất trên đường dây.", correct: true },
      { key: "b", text: "Trạm biến áp giúp điều chỉnh điện áp phù hợp giữa các cấp lưới điện.", correct: true },
      { key: "c", text: "Không cần cân bằng giữa công suất phát và phụ tải trong vận hành hệ thống điện.", correct: false },
      { key: "d", text: "Trung tâm điều độ có vai trò giám sát và điều khiển đảm bảo vận hành ổn định hệ thống điện.", correct: true }
    ]
  },
  {
    topic: "BÀI 4", type: "tf", source: "Bài 4 - Phần II - Câu 4 (Trang 16)",
    question: "Về chức năng của các bộ phận trong hệ thống điện quốc gia:",
    items: [
      { key: "a", text: "Nguồn điện có chức năng biến đổi các dạng năng lượng khác thành điện năng.", correct: true },
      { key: "b", text: "Tải tiêu thụ là nơi biến đổi điện năng thành các dạng năng lượng có ích.", correct: true },
      { key: "c", text: "Lưới điện chỉ có chức năng lưu trữ điện năng.", correct: false },
      { key: "d", text: "Trạm biến áp chỉ được sử dụng trong hộ gia đình.", correct: false }
    ]
  },
  {
    topic: "BÀI 4", type: "tf", source: "Bài 4 - Phần II - Câu 5 (Trang 16)",
    question: "Về phát triển lưới điện thông minh trong hệ thống điện quốc gia:",
    items: [
      { key: "a", text: "Ứng dụng công nghệ số giúp tối ưu hóa vận hành hệ thống điện quốc gia.", correct: true },
      { key: "b", text: "Hệ thống điện quốc gia có thể tích hợp nhiều nguồn điện khác nhau như thủy điện, nhiệt điện, năng lượng tái tạo.", correct: true },
      { key: "c", text: "Việc vận hành hệ thống điện không cần đến trung tâm điều độ.", correct: false },
      { key: "d", text: "Dữ liệu vận hành giúp dự báo phụ tải và điều chỉnh cung cấp điện hiệu quả.", correct: true }
    ]
  },
  {
    topic: "BÀI 4", type: "tf", source: "Bài 4 - Phần II - Câu 6 (Trang 16)",
    question: "Về quá trình truyền tải và phân phối điện năng từ nhà máy đến người tiêu dùng:",
    items: [
      { key: "a", text: "Lưới truyền tải sử dụng điện áp cao để truyền điện đi xa.", correct: true },
      { key: "b", text: "Lưới phân phối có nhiệm vụ đưa điện trực tiếp đến người tiêu dùng.", correct: true },
      { key: "c", text: "Lưới truyền tải sử dụng điện áp thấp để đảm bảo an toàn.", correct: false },
      { key: "d", text: "Lưới phân phối không cần trạm biến áp để hạ áp.", correct: false }
    ]
  },

  // ==========================================
  // BÀI 5: SẢN XUẤT ĐIỆN NĂNG
  // ==========================================
  // --- 30 Câu Trắc Nghiệm ---
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 1 (Trang 16)",
    question: "Sản xuất điện năng là quá trình",
    options: [
      { key: "A", text: "biến đổi điện năng thành cơ năng." },
      { key: "B", text: "biến đổi các dạng năng lượng khác thành điện năng." },
      { key: "C", text: "truyền tải điện năng đi xa." },
      { key: "D", text: "lưu trữ điện năng trong pin." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 2 (Trang 16)",
    question: "Thiết bị chính tạo ra điện năng trong nhà máy điện là",
    options: [
      { key: "A", text: "máy biến áp." },
      { key: "B", text: "động cơ điện." },
      { key: "C", text: "máy phát điện." },
      { key: "D", text: "tụ điện." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 3 (Trang 16)",
    question: "Nguồn năng lượng nào sau đây là tái tạo?",
    options: [
      { key: "A", text: "Than đá." },
      { key: "B", text: "Dầu mỏ." },
      { key: "C", text: "Khí tự nhiên." },
      { key: "D", text: "Năng lượng gió." }
    ],
    correct: "D"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 4 (Trang 16-17)",
    question: "Nhà máy thủy điện sử dụng năng lượng của",
    options: [
      { key: "A", text: "nhiệt độ nước." },
      { key: "B", text: "áp suất không khí." },
      { key: "C", text: "thế năng của nước." },
      { key: "D", text: "hóa năng của nước." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 5 (Trang 17)",
    question: "Nhà máy nhiệt điện chủ yếu sử dụng",
    options: [
      { key: "A", text: "gió." },
      { key: "B", text: "nhiên liệu hóa thạch." },
      { key: "C", text: "ánh sáng mặt trời." },
      { key: "D", text: "nước biển." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 6 (Trang 17)",
    question: "Điện hạt nhân được tạo ra từ",
    options: [
      { key: "A", text: "phản ứng hóa học." },
      { key: "B", text: "phản ứng phân hạch." },
      { key: "C", text: "phản ứng cháy." },
      { key: "D", text: "phản ứng bay hơi." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 7 (Trang 17)",
    question: "Điện gió hoạt động dựa trên việc",
    options: [
      { key: "A", text: "gió làm quay turbine." },
      { key: "B", text: "nước làm quay rotor." },
      { key: "C", text: "nhiệt làm quay trục." },
      { key: "D", text: "áp suất khí nén." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 8 (Trang 17)",
    question: "Điện mặt trời được tạo ra nhờ",
    options: [
      { key: "A", text: "hiệu ứng nhiệt." },
      { key: "B", text: "hiệu ứng từ trường." },
      { key: "C", text: "hiệu ứng quang điện." },
      { key: "D", text: "hiệu ứng cơ học." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 9 (Trang 17)",
    question: "Trong hệ thống điện, máy biến áp có chức năng",
    options: [
      { key: "A", text: "tạo điện năng." },
      { key: "B", text: "tăng giảm điện áp." },
      { key: "C", text: "lưu trữ điện năng." },
      { key: "D", text: "phát điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 10 (Trang 17)",
    question: "Điện năng được truyền tải chủ yếu dưới dạng",
    options: [
      { key: "A", text: "cơ năng." },
      { key: "B", text: "nhiệt năng." },
      { key: "C", text: "điện xoay chiều." },
      { key: "D", text: "hóa năng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 11 (Trang 17)",
    question: "Trong thủy điện, vai trò của turbine là",
    options: [
      { key: "A", text: "tạo nước áp lực cao." },
      { key: "B", text: "biến cơ năng nước thành cơ năng quay." },
      { key: "C", text: "biến điện năng thành cơ năng." },
      { key: "D", text: "tăng điện áp." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 12 (Trang 17)",
    question: "Ưu điểm lớn nhất của điện gió là",
    options: [
      { key: "A", text: "công suất ổn định." },
      { key: "B", text: "không phụ thuộc môi trường." },
      { key: "C", text: "không phát thải khí nhà kính." },
      { key: "D", text: "chi phí đầu tư thấp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 13 (Trang 17)",
    question: "Điện mặt trời thường không ổn định vì",
    options: [
      { key: "A", text: "Thiếu thiết bị." },
      { key: "B", text: "Phụ thuộc ánh sáng mặt trời." },
      { key: "C", text: "Thiếu nước làm mát." },
      { key: "D", text: "Thiếu nhiên liệu." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 14 (Trang 17)",
    question: "Nhiệt điện gây ô nhiễm chủ yếu do",
    options: [
      { key: "A", text: "dùng nước." },
      { key: "B", text: "phát thải khí đốt nhiên liệu hóa thạch." },
      { key: "C", text: "không có turbine." },
      { key: "D", text: "không có máy phát điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 15 (Trang 17)",
    question: "Trong điện hạt nhân, năng lượng được sinh ra từ",
    options: [
      { key: "A", text: "phân hạch hạt nhân." },
      { key: "B", text: "đốt than." },
      { key: "C", text: "gió." },
      { key: "D", text: "ánh sáng." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 16 (Trang 17-18)",
    question: "Nhà máy thủy điện chuyển hóa năng lượng theo chuỗi đúng là",
    options: [
      { key: "A", text: "điện năng → cơ năng → thế năng." },
      { key: "B", text: "thế năng nước → cơ năng → điện năng." },
      { key: "C", text: "hóa năng → điện năng → cơ năng." },
      { key: "D", text: "nhiệt năng → điện năng → cơ năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 17 (Trang 18)",
    question: "Điện gió thường không ổn định vì",
    options: [
      { key: "A", text: "gió thay đổi theo thời gian." },
      { key: "B", text: "thiếu pin." },
      { key: "C", text: "thiếu nước." },
      { key: "D", text: "thiếu nhiên liệu." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 18 (Trang 18)",
    question: "Trong các loại nhà máy điện dưới đây, loại nào không sử dụng nhiên liệu hóa thạch để phát điện?",
    options: [
      { key: "A", text: "Nhà máy nhiệt điện than." },
      { key: "B", text: "Nhà máy nhiệt điện khí." },
      { key: "C", text: "Nhà máy điện gió." },
      { key: "D", text: "Nhà máy nhiệt điện dầu." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 19 (Trang 18)",
    question: "Điện mặt trời cần biến đổi DC sang AC vì",
    options: [
      { key: "A", text: "để tăng công suất." },
      { key: "B", text: "để hòa lưới điện." },
      { key: "C", text: "để giảm nhiệt." },
      { key: "D", text: "để tạo pin." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 20 (Trang 18)",
    question: "Điện hạt nhân có ưu điểm là",
    options: [
      { key: "A", text: "không cần nhiên liệu." },
      { key: "B", text: "công suất lớn, ổn định." },
      { key: "C", text: "không cần nhà máy." },
      { key: "D", text: "không cần turbine." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 21 (Trang 18)",
    question: "Một khu vực ven biển có gió mạnh quanh năm, giải pháp phù hợp nhất là",
    options: [
      { key: "A", text: "nhiệt điện." },
      { key: "B", text: "thủy điện." },
      { key: "C", text: "điện gió." },
      { key: "D", text: "điện hạt nhân." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 22 (Trang 18)",
    question: "Gia đình muốn tiết kiệm điện và tận dụng mái nhà, nên dùng",
    options: [
      { key: "A", text: "điện gió." },
      { key: "B", text: "điện mặt trời." },
      { key: "C", text: "nhiệt điện." },
      { key: "D", text: "thủy điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 23 (Trang 18)",
    question: "Nhà máy cần hoạt động ổn định 24/24 nên ưu tiên",
    options: [
      { key: "A", text: "điện mặt trời." },
      { key: "B", text: "điện gió." },
      { key: "C", text: "nhiệt điện." },
      { key: "D", text: "pin mặt trời." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 24 (Trang 18)",
    question: "Một khu vực miền núi có sông lớn, giải pháp phù hợp là",
    options: [
      { key: "A", text: "điện gió." },
      { key: "B", text: "thủy điện." },
      { key: "C", text: "điện mặt trời." },
      { key: "D", text: "nhiệt điện dầu." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 25 (Trang 18)",
    question: "Quốc gia muốn giảm phát thải CO2 nhưng vẫn đảm bảo điện nền ổn định, giải pháp tối ưu là",
    options: [
      { key: "A", text: "chỉ dùng điện gió." },
      { key: "B", text: "chỉ dùng điện mặt trời." },
      { key: "C", text: "kết hợp điện hạt nhân và năng lượng tái tạo." },
      { key: "D", text: "chỉ dùng pin lưu trữ." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 26 (Trang 18-19)",
    question: "Hệ thống điện mặt trời ở vùng núi thường xuyên mất nắng cần giải pháp phù hợp nhất là",
    options: [
      { key: "A", text: "tăng số lượng pin mặt trời." },
      { key: "B", text: "bỏ hệ thống lưu trữ." },
      { key: "C", text: "kết hợp pin lưu trữ năng lượng." },
      { key: "D", text: "giảm công suất inverter." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 27 (Trang 19)",
    question: "Một nhà máy muốn giảm chi phí nhiên liệu lâu dài nên chọn",
    options: [
      { key: "A", text: "nhiệt điện than." },
      { key: "B", text: "điện mặt trời." },
      { key: "C", text: "diesel." },
      { key: "D", text: "khí hóa lỏng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 28 (Trang 19)",
    question: "Khi thiết kế hệ thống điện gió, yếu tố quan trọng nhất là",
    options: [
      { key: "A", text: "màu turbine." },
      { key: "B", text: "tốc độ gió trung bình." },
      { key: "C", text: "chiều cao nhà dân." },
      { key: "D", text: "độ ẩm đất." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 29 (Trang 19)",
    question: "Điện hạt nhân ít được triển khai rộng vì",
    options: [
      { key: "A", text: "không tạo điện." },
      { key: "B", text: "nguy cơ phóng xạ cao." },
      { key: "C", text: "không cần công nghệ." },
      { key: "D", text: "công suất thấp." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 5", type: "mc", source: "Bài 5 - Câu 30 (Trang 19)",
    question: "Một hệ thống điện tái tạo muốn ổn định cung cấp điện cần",
    options: [
      { key: "A", text: "giảm thiết bị." },
      { key: "B", text: "không dùng pin." },
      { key: "C", text: "hệ thống lưu trữ năng lượng." },
      { key: "D", text: "giảm công suất phát." }
    ],
    correct: "C"
  },
  // --- 6 Câu Đúng / Sai ---
  {
    topic: "BÀI 5", type: "tf", source: "Bài 5 - Phần II - Câu 1 (Trang 19)",
    question: "Về quá trình sản xuất và chuyển đổi điện năng tại các nhà máy điện:",
    items: [
      { key: "a", text: "Sản xuất điện năng là quá trình biến đổi các dạng năng lượng khác thành điện năng.", correct: true },
      { key: "b", text: "Điện năng chỉ được tạo ra từ năng lượng hóa học của nhiên liệu hóa thạch.", correct: false },
      { key: "c", text: "Phần lớn điện năng hiện nay được sản xuất tại các nhà máy điện.", correct: true },
      { key: "d", text: "Máy phát điện có vai trò biến đổi cơ năng thành điện năng.", correct: true }
    ]
  },
  {
    topic: "BÀI 5", type: "tf", source: "Bài 5 - Phần II - Câu 2 (Trang 19)",
    question: "Về đặc điểm và quy trình chuyển đổi năng lượng của nhà máy thủy điện:",
    items: [
      { key: "a", text: "Thủy điện sử dụng thế năng của nước để làm quay turbine.", correct: true },
      { key: "b", text: "Thủy điện luôn phát điện ổn định không phụ thuộc lưu lượng nước.", correct: false },
      { key: "c", text: "Thủy điện là nguồn năng lượng tái tạo.", correct: true },
      { key: "d", text: "Thủy điện không phát thải khí nhà kính trong quá trình vận hành.", correct: true }
    ]
  },
  {
    topic: "BÀI 5", type: "tf", source: "Bài 5 - Phần II - Câu 3 (Trang 19)",
    question: "Về đặc điểm vận hành của nhà máy nhiệt điện:",
    items: [
      { key: "a", text: "Nhiệt điện sử dụng nhiên liệu hóa thạch để tạo hơi nước áp suất cao.", correct: true },
      { key: "b", text: "Nhiệt điện không gây ra bất kỳ khí thải nào ra môi trường.", correct: false },
      { key: "c", text: "Nhiệt điện có thể hoạt động liên tục không phụ thuộc thời tiết.", correct: true },
      { key: "d", text: "Chi phí vận hành nhiệt điện phụ thuộc giá nhiên liệu đầu vào.", correct: true }
    ]
  },
  {
    topic: "BÀI 5", type: "tf", source: "Bài 5 - Phần II - Câu 4 (Trang 19-20)",
    question: "Về quy trình và tính an toàn của nhà máy điện hạt nhân:",
    items: [
      { key: "a", text: "Điện hạt nhân sử dụng phản ứng phân hạch để tạo năng lượng.", correct: true },
      { key: "b", text: "Điện hạt nhân hoàn toàn không có rủi ro môi trường.", correct: false },
      { key: "c", text: "Điện hạt nhân có công suất phát điện lớn và ổn định.", correct: true },
      { key: "d", text: "Chất thải hạt nhân cần được xử lý đặc biệt do nguy cơ phóng xạ.", correct: true }
    ]
  },
  {
    topic: "BÀI 5", type: "tf", source: "Bài 5 - Phần II - Câu 5 (Trang 20)",
    question: "Về điều kiện và tác động môi trường của nhà máy điện gió:",
    items: [
      { key: "a", text: "Điện gió phụ thuộc vào điều kiện tốc độ gió tại địa phương.", correct: true },
      { key: "b", text: "Điện gió luôn có công suất ổn định như thủy điện.", correct: false },
      { key: "c", text: "Điện gió là nguồn năng lượng tái tạo và sạch.", correct: true },
      { key: "d", text: "Điện gió có thể gây tiếng ồn ảnh hưởng môi trường xung quanh.", correct: true }
    ]
  },
  {
    topic: "BÀI 5", type: "tf", source: "Bài 5 - Phần II - Câu 6 (Trang 20)",
    question: "Về giải pháp vận hành hệ thống điện mặt trời gia đình:",
    items: [
      { key: "a", text: "Điện mặt trời phụ thuộc cường độ ánh sáng mặt trời.", correct: true },
      { key: "b", text: "Hệ thống điện mặt trời không cần thiết bị lưu trữ năng lượng.", correct: false },
      { key: "c", text: "Pin lưu trữ giúp cấp điện khi không có ánh sáng mặt trời.", correct: true },
      { key: "d", text: "Điện mặt trời có thể hòa vào lưới điện sau khi biến đổi AC.", correct: true }
    ]
  },

  // ==========================================
  // BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ
  // ==========================================
  // --- 30 Câu Trắc Nghiệm ---
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 1 (Trang 20)",
    question: "Mạng điện sản xuất quy mô nhỏ thường lấy điện từ đâu?",
    options: [
      { key: "A", text: "Pin mặt trời độc lập." },
      { key: "B", text: "Lưới điện phân phối." },
      { key: "C", text: "Máy phát diesel duy nhất." },
      { key: "D", text: "Nguồn DC 12V." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 2 (Trang 20)",
    question: "Điện áp sử dụng phổ biến trong mạng điện sản xuất quy mô nhỏ là",
    options: [
      { key: "A", text: "110V." },
      { key: "B", text: "220V một pha." },
      { key: "C", text: "380/220V ba pha." },
      { key: "D", text: "500kV." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 3 (Trang 20)",
    question: "Thiết bị có nhiệm vụ phân phối điện đến các tủ nhánh là",
    options: [
      { key: "A", text: "tủ điện động lực." },
      { key: "B", text: "tủ điện phân phối tổng." },
      { key: "C", text: "máy biến áp." },
      { key: "D", text: "đèn chiếu sáng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 4 (Trang 20)",
    question: "Thành phần không thuộc mạng điện sản xuất quy mô nhỏ là",
    options: [
      { key: "A", text: "tủ phân phối nhánh." },
      { key: "B", text: "tủ động lực." },
      { key: "C", text: "ắc quy xe điện." },
      { key: "D", text: "tủ chiếu sáng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 5 (Trang 20)",
    question: "Dây cáp điện trong mạng điện có chức năng",
    options: [
      { key: "A", text: "tăng điện áp." },
      { key: "B", text: "đo công suất." },
      { key: "C", text: "truyền tải điện năng." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 6 (Trang 20)",
    question: "Tủ điện chiếu sáng dùng để",
    options: [
      { key: "A", text: "cấp điện cho hệ thống chiếu sáng." },
      { key: "B", text: "cấp điện cho máy CNC." },
      { key: "C", text: "biến đổi cơ năng." },
      { key: "D", text: "tăng công suất máy phát." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 7 (Trang 21)",
    question: "Tủ điện động lực cấp điện trực tiếp cho",
    options: [
      { key: "A", text: "hệ thống chiếu sáng." },
      { key: "B", text: "máy móc sản xuất." },
      { key: "C", text: "đường dây cao thế." },
      { key: "D", text: "trạm biến áp." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 8 (Trang 21)",
    question: "Trạm biến áp trong mạng điện có nhiệm vụ",
    options: [
      { key: "A", text: "tăng áp lên 110kV." },
      { key: "B", text: "hạ áp xuống 380/220V." },
      { key: "C", text: "tạo điện từ ánh sáng." },
      { key: "D", text: "lưu trữ điện năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 9 (Trang 21)",
    question: "Mạng điện sản xuất quy mô nhỏ thường có đặc điểm",
    options: [
      { key: "A", text: "tải phân bố tập trung." },
      { key: "B", text: "không có thiết bị bảo vệ." },
      { key: "C", text: "dùng điện cao áp trực tiếp." },
      { key: "D", text: "không cần dây dẫn." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 10 (Trang 21)",
    question: "Tủ điện phân phối nhánh cấp điện cho",
    options: [
      { key: "A", text: "máy biến áp." },
      { key: "B", text: "khu vực sản xuất." },
      { key: "C", text: "đường dây truyền tải." },
      { key: "D", text: "nhà máy điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 11 (Trang 21)",
    question: "Trong xưởng sản xuất, việc dùng tủ phân phối tổng giúp",
    options: [
      { key: "A", text: "lưu trữ điện năng." },
      { key: "B", text: "tăng điện áp hệ thống." },
      { key: "C", text: "phân phối điện an toàn đến các nhánh." },
      { key: "D", text: "biến đổi cơ năng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 12 (Trang 21)",
    question: "Vì sao tủ động lực cần thiết trong xưởng sản xuất?",
    options: [
      { key: "A", text: "cấp điện cho chiếu sáng." },
      { key: "B", text: "điều khiển máy móc sản xuất." },
      { key: "C", text: "lưu trữ điện." },
      { key: "D", text: "tăng công suất nguồn." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 13 (Trang 21)",
    question: "Trong thực tế, tủ chiếu sáng được thiết kế độc lập vì",
    options: [
      { key: "A", text: "giảm tổn thất điện." },
      { key: "B", text: "tăng tốc độ máy." },
      { key: "C", text: "không liên quan sản xuất." },
      { key: "D", text: "không cần dây dẫn." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 14 (Trang 21)",
    question: "Hệ thống dây cáp điện được bố trí nhằm",
    options: [
      { key: "A", text: "điều khiển tự động." },
      { key: "B", text: "kết nối các thiết bị điện." },
      { key: "C", text: "tăng điện áp." },
      { key: "D", text: "tạo điện năng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 15 (Trang 21)",
    question: "Trong nhà xưởng, nếu tủ động lực quá tải, hiện tượng có thể xảy ra là",
    options: [
      { key: "A", text: "tăng hiệu suất." },
      { key: "B", text: "cháy thiết bị." },
      { key: "C", text: "giảm điện áp cục bộ." },
      { key: "D", text: "tăng ánh sáng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 16 (Trang 21)",
    question: "Thông qua quan sát sơ đồ mạng điện sản xuất quy mô nhỏ, đã cho ta thấy được",
    options: [
      { key: "A", text: "cấu trúc phân cấp từ trạm biến áp đến tải." },
      { key: "B", text: "các thiết bị nối song song ngẫu nhiên." },
      { key: "C", text: "không có tủ phân phối." },
      { key: "D", text: "không cần dây dẫn." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 17 (Trang 21)",
    question: "Tại sao cần tủ phân phối nhánh?",
    options: [
      { key: "A", text: "tăng điện áp." },
      { key: "B", text: "phân phối điện đến từng khu vực." },
      { key: "C", text: "lưu trữ điện." },
      { key: "D", text: "phát điện." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 18 (Trang 22)",
    question: "Trong hệ thống điện xưởng, thiết bị nào bảo vệ quá tải?",
    options: [
      { key: "A", text: "tủ động lực." },
      { key: "B", text: "máy phát." },
      { key: "C", text: "tủ phân phối tổng." },
      { key: "D", text: "đèn LED." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 19 (Trang 22)",
    question: "Việc phân chia tủ điện giúp",
    options: [
      { key: "A", text: "giảm độ an toàn." },
      { key: "B", text: "tăng nguy cơ sự cố." },
      { key: "C", text: "quản lý tải hiệu quả hơn." },
      { key: "D", text: "loại bỏ dây dẫn." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 20 (Trang 22)",
    question: "Nếu xưởng chỉ có một tủ điện duy nhất, điều gì dễ xảy ra?",
    options: [
      { key: "A", text: "phân tải tốt hơn." },
      { key: "B", text: "dễ quá tải toàn hệ thống." },
      { key: "C", text: "tiết kiệm điện năng." },
      { key: "D", text: "tăng độ ổn định." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 21 (Trang 22)",
    question: "Một xưởng may thường xuyên quá tải cục bộ. Giải pháp hợp lý là",
    options: [
      { key: "A", text: "bỏ tủ phân phối." },
      { key: "B", text: "gộp toàn bộ tải vào một nhánh." },
      { key: "C", text: "phân chia thêm tủ phân phối nhánh." },
      { key: "D", text: "giảm dây dẫn." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 22 (Trang 22)",
    question: "Khi thiết kế hệ thống điện cho xưởng mới, ưu tiên đầu tiên là",
    options: [
      { key: "A", text: "trang trí thiết bị." },
      { key: "B", text: "bố trí cấp điện hợp lý theo phân cấp." },
      { key: "C", text: "giảm số lượng dây dẫn." },
      { key: "D", text: "tăng ánh sáng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 23 (Trang 22)",
    question: "Nếu dây cáp điện quá nhỏ so với tải, hiện tượng xảy ra",
    options: [
      { key: "A", text: "giảm nhiệt độ." },
      { key: "B", text: "an toàn hơn." },
      { key: "C", text: "quá nhiệt, dễ cháy." },
      { key: "D", text: "tăng điện áp." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 24 (Trang 22)",
    question: "Một nhà xưởng muốn mở rộng thêm máy CNC công suất lớn. Giải pháp tối ưu là",
    options: [
      { key: "A", text: "không thay đổi hệ thống." },
      { key: "B", text: "dùng chung tủ chiếu sáng." },
      { key: "C", text: "nâng cấp tủ động lực và phân nhánh riêng." },
      { key: "D", text: "bỏ tủ phân phối tổng." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 25 (Trang 22)",
    question: "Trong thực tế, việc tách hệ thống chiếu sáng và động lực giúp",
    options: [
      { key: "A", text: "tăng rủi ro." },
      { key: "B", text: "giảm độ ổn định." },
      { key: "C", text: "dễ quản lý và an toàn hơn." },
      { key: "D", text: "loại bỏ bảo vệ." }
    ],
    correct: "C"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 26 (Trang 22)",
    question: "Một xưởng có nhiều khu vực sản xuất nên",
    options: [
      { key: "A", text: "dùng một tủ duy nhất." },
      { key: "B", text: "bố trí nhiều tủ phân phối nhánh." },
      { key: "C", text: "bỏ dây cáp." },
      { key: "D", text: "giảm tải máy móc." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 27 (Trang 22)",
    question: "Nếu tủ động lực đặt quá xa máy móc, hậu quả là",
    options: [
      { key: "A", text: "giảm tổn thất." },
      { key: "B", text: "tăng sụt áp." },
      { key: "C", text: "tăng hiệu suất." },
      { key: "D", text: "không ảnh hưởng." }
    ],
    correct: "B"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 28 (Trang 22)",
    question: "Một kỹ sư thiết kế hệ thống điện cho xưởng thông minh, yêu cầu ưu tiên",
    options: [
      { key: "A", text: "bố trí phân cấp tủ điện hợp lý." },
      { key: "B", text: "dùng một đường dây duy nhất." },
      { key: "C", text: "không cần bảo vệ." },
      { key: "D", text: "loại bỏ tủ phân phối nhánh." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 29 (Trang 22)",
    question: "Trong thực tế, việc bảo vệ ngắn mạch chủ yếu nằm ở",
    options: [
      { key: "A", text: "tủ phân phối tổng." },
      { key: "B", text: "đèn chiếu sáng." },
      { key: "C", text: "máy CNC." },
      { key: "D", text: "quạt công nghiệp." }
    ],
    correct: "A"
  },
  {
    topic: "BÀI 6", type: "mc", source: "Bài 6 - Câu 30 (Trang 22)",
    question: "Xu hướng hiện đại trong mạng điện xưởng là",
    options: [
      { key: "A", text: "tăng tự động hóa và phân phối thông minh." },
      { key: "B", text: "giảm tủ điện." },
      { key: "C", text: "không dùng dây dẫn." },
      { key: "D", text: "dùng điện trực tiếp cao áp." }
    ],
    correct: "A"
  },
  // --- 6 Câu Đúng / Sai ---
  {
    topic: "BÀI 6", type: "tf", source: "Bài 6 - Phần II - Câu 1 (Trang 23)",
    question: "Về cấu trúc nguồn và phụ tải của mạng điện sản xuất quy mô nhỏ:",
    items: [
      { key: "a", text: "Mạng điện sản xuất quy mô nhỏ thường lấy điện từ lưới điện phân phối qua trạm biến áp riêng hoặc lưới hạ áp 380/220V.", correct: true },
      { key: "b", text: "Tải trong mạng điện sản xuất quy mô nhỏ chỉ gồm thiết bị chiếu sáng.", correct: false },
      { key: "c", text: "Mạng điện này có thể cung cấp điện cho động cơ, thiết bị sản xuất và chiếu sáng.", correct: true },
      { key: "d", text: "Mạng điện sản xuất quy mô nhỏ luôn sử dụng điện áp một chiều.", correct: false }
    ]
  },
  {
    topic: "BÀI 6", type: "tf", source: "Bài 6 - Phần II - Câu 2 (Trang 23)",
    question: "Về chức năng các thiết bị trong mạng điện sản xuất quy mô nhỏ:",
    items: [
      { key: "a", text: "Trạm biến áp có nhiệm vụ hạ áp từ trung áp xuống hạ áp để cấp cho mạng điện xưởng.", correct: true },
      { key: "b", text: "Tủ điện phân phối tổng chỉ có nhiệm vụ lưu trữ điện năng.", correct: false },
      { key: "c", text: "Tủ điện phân phối nhánh cấp điện trực tiếp cho các khu vực sản xuất.", correct: true },
      { key: "d", text: "Dây cáp điện chỉ dùng để truyền tín hiệu điều khiển.", correct: false }
    ]
  },
  {
    topic: "BÀI 6", type: "tf", source: "Bài 6 - Phần II - Câu 3 (Trang 23)",
    question: "Về nghiệm thu và chức năng của các tủ điện trong xưởng sản xuất:",
    items: [
      { key: "a", text: "Tủ điện động lực cung cấp điện trực tiếp cho máy móc sản xuất.", correct: true },
      { key: "b", text: "Tủ điện chiếu sáng có thể hoạt động độc lập với tủ động lực.", correct: true },
      { key: "c", text: "Tủ điện phân phối tổng không có chức năng bảo vệ quá tải.", correct: false },
      { key: "d", text: "Dây cáp điện là thành phần kết nối các thiết bị trong toàn hệ thống.", correct: true }
    ]
  },
  {
    topic: "BÀI 6", type: "tf", source: "Bài 6 - Phần II - Câu 4 (Trang 23)",
    question: "Khi xưởng may bị quá tải cục bộ, đâu là giải pháp kỹ thuật đúng?",
    items: [
      { key: "a", text: "Lắp thêm tủ điện phân phối nhánh để chia tải hợp lý.", correct: true },
      { key: "b", text: "Loại bỏ hoàn toàn tủ điện phân phối tổng để giảm chi phí.", correct: false },
      { key: "c", text: "Sử dụng dây cáp điện có tiết diện phù hợp để đảm bảo an toàn.", correct: true },
      { key: "d", text: "Gộp toàn bộ tải về một tủ điện động lực duy nhất để đơn giản hệ thống.", correct: false }
    ]
  },
  {
    topic: "BÀI 6", type: "tf", source: "Bài 6 - Phần II - Câu 5 (Trang 23)",
    question: "Về nguyên tắc thiết kế và bố trí các tủ điện trong nhà xưởng:",
    items: [
      { key: "a", text: "Tủ điện phân phối tổng thường đặt gần trạm biến áp.", correct: true },
      { key: "b", text: "Tủ điện chiếu sáng chỉ dùng cho thiết bị công suất lớn.", correct: false },
      { key: "c", text: "Tủ điện động lực cần có thiết bị bảo vệ quá tải và ngắn mạch.", correct: true },
      { key: "d", text: "Mạng điện chiếu sáng và mạng điện sản xuất hoạt động độc lập.", correct: true }
    ]
  },
  {
    topic: "BÀI 6", type: "tf", source: "Bài 6 - Phần II - Câu 6 (Trang 24)",
    question: "Khi cải tạo mạng điện của trường học để mở rộng quy mô sản xuất, thực hành:",
    items: [
      { key: "a", text: "Tăng số lượng tủ điện phân phối nhánh để giảm tải từng khu vực.", correct: true },
      { key: "b", text: "Bỏ qua trạm biến áp và lấy trực tiếp điện cao áp vào xưởng.", correct: false },
      { key: "c", text: "Phân tách hệ thống chiếu sáng và hệ thống động lực.", correct: true },
      { key: "d", text: "Sử dụng dây cáp điện không có bảo vệ để tiết kiệm chi phí.", correct: false }
    ]
  }
];
5. Hệ thống sẽ tự động nhận diện đủ **216 câu hỏi**, cho phép chọn thi riêng từng bài (36 câu) hoặc thi ngẫu nhiên toàn bộ 6 bài với đầy đủ tính năng đảo đề, đảo đáp án và chấm điểm thang 10.
