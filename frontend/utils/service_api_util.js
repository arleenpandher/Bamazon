export const fetchservices = () => (
    $.ajax({
        url: `/api/services`,
        method: "GET"
    })
)