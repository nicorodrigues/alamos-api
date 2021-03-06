export default (query: any, pagination: boolean = false) => {
    const filters: any = {
        limit: query.limit ? Number(query.limit) : 10,
        page: query.page ? Number(query.page) : 1,
        from: query.from ? query.from : null,
        until: query.until ? query.until : null,
        search: query.search ? query.search : null,
    };

    return filters;
};
