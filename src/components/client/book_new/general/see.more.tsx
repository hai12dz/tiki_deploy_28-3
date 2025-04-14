import React, { useState } from 'react';

const SeeMore = () => {
    // State to track whether content is expanded
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle expanded state
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="sc-34e0efdc-0 dSZwVn">
            <div className="sc-34e0efdc-1 ddClVB">Mô tả sản phẩm</div>
            <div className="sc-6127f691-0 jGQAXd content">
                <div className="sc-f5219d7f-1 jBwezC">
                    <div
                        className="sc-f5219d7f-0 haxTPb"
                        style={{
                            overflow: isExpanded ? "visible" : "hidden",
                            height: isExpanded ? "auto" : 250
                        }}
                    >
                        <p>
                            Trong thời đại hiện nay, tất cả những ai không muốn bị tụt hậu đều cần
                            học về các công cụ AI, đặc biệt là biết cách sử dụng công cụ AI trong
                            thực tế. Nếu nắm vững các kiến thức xoay quanh các công cụ AI, bạn có
                            thể nhận được sự hỗ trợ đắc lực để nâng cấp đời sống của mình.
                        </p>
                        <p>
                            Một trong những AI thông minh nhất hiện nay là gọi tên Chat GPT. Kể từ
                            khi ra mắt, Chat GPT luôn được mệnh danh là một trí tuệ nhân tạo (AI)
                            thông minh nhất thế giới.
                        </p>
                        <p>
                            Bất kỳ ai từng sử dụng ChatGPT đều có thể cảm nhận sức hấp dẫn và khả
                            năng tư duy “giống như con người” của nó. Nếu nắm được cách thức đặt
                            câu lệnh chính xác, ta có thể dùng ChatGPT để hiện thực hóa vô số tiềm
                            năng, ví dụ như tạo nội dung quảng cáo, làm bảng tính, viết bài văn,
                            viết sách, tạo hình ảnh
                        </p>
                        <p>
                            Cuốn sách ChatGPT thực chiến xoay quanh việc học và sử dụng các công
                            cụ AI, cũng như cách vận hành thực tế những ứng dụng AI trong các lĩnh
                            vực khác nhau. Cuốn sách cung cấp những kiến thức cô đọng và thực tiễn
                            nhất để nâng cao toàn diện những nhận thức, nguyên tắc sử dụng và các
                            thao tác liên quan đến công cụ AI.
                        </p>
                        <p>
                            Đây là thời đại mà tất cả chúng ta đều phải chạy đua, với điểm đích
                            của cuộc đua chính là làm chủ công cụ AI. Nắm chắc nó, đồng thời sử
                            dụng nó tạo ra thành tích là thử thách mà mỗi chúng ta đều phải đối
                            mặt. Hãy cùng nhau bắt đầu tiến vào thời đại mới, nơi AI và con người
                            cộng sinh!
                        </p>
                        <p>Các nội dung chính của cuốn sách:</p>
                        <p>Chương 1: Nhập môn ChatGPT</p>
                        <p>Chương 2: Làm chủ công cụ viết AI</p>
                        <p>Chương 3: Nhập môn Midjourney AI</p>
                        <p>Chương 4: ChatGPT và tạo âm thanh</p>
                        <p>Chương 5: ChatGPT và sản xuất video</p>
                        <p>Chương 6: ChatGPT và digital human</p>
                        <p>Chương 7: ChatGPT nâng cao hiệu quả học tập</p>
                        <p>
                            Chương 8: ChatGPT nâng cao hiệu suất tại nơi làm việc: hỗ trợ thực
                            hiện báo cáo, tóm tắt cuộc họp, viết nội dung, tối ưu hóa sơ yếu lý
                            lịch và mô phỏng phỏng vẫn
                        </p>
                        <p>Chương 9: Xu hướng của lĩnh vực trí tuệ nhân tạo</p>
                        <p>
                            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
                            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
                            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
                            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
                            trên 1 triệu đồng).....
                        </p>
                        <div className="gradient" style={{ display: isExpanded ? 'none' : 'block' }} />
                    </div>
                    <a
                        className="btn-more"
                        data-view-id="pdp_view_description_button"
                        onClick={toggleExpand}
                        style={{ cursor: 'pointer' }}
                    >
                        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SeeMore;