import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookByIdAPI } from '@/services/api';

const InfoBook = () => {
    const [book, setBook] = useState<IBookTable | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams<{ id: string }>();

    // Additional book details that might not be in the API response
    const [additionalDetails, setAdditionalDetails] = useState({
        bookcare: 'Có',
        size: '13 x 20.5 cm',
        translator: 'Huyền Trang',
        coverType: 'Bìa mềm',
        pageCount: '263',
        publishingHouse: 'Nhà Xuất Bản Dân Trí'
    });

    useEffect(() => {
        const fetchBookData = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const res = await getBookByIdAPI(id);

                if (res.statusCode === 200 && res.data) {
                    setBook(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch book details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookData();
    }, [id]);

    // Format date function
    const formatDate = (dateString: Date) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN');
    };

    return (
        <div className="sc-34e0efdc-0 dSZwVn">
            <div className="sc-34e0efdc-1 ddClVB">Thông tin chi tiết</div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Bookcare
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{additionalDetails.bookcare}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Công ty phát hành
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{book?.supplier?.name || ''}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Ngày xuất bản
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">
                                {book?.createdAt ? formatDate(book.createdAt) : ''}
                            </span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Kích thước
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{additionalDetails.size}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Tác giả
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{book?.author || ''}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Dịch Giả
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{additionalDetails.translator}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Loại bìa
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{additionalDetails.coverType}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Số trang
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{additionalDetails.pageCount}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Thể loại
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{book?.category || ''}</span>
                        </div>
                    </div>
                    <div className="sc-34e0efdc-2 kAFhAU">
                        <div
                            className="sc-34e0efdc-3 jcYGog"
                            style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 4 }}
                        >
                            <span style={{ maxWidth: 300, color: "rgb(128, 128, 137)" }}>
                                Nhà xuất bản
                            </span>
                            <span className="sc-2a4bd363-0 kdahle">{additionalDetails.publishingHouse}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfoBook;