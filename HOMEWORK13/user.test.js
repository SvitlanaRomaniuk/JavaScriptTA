describe('useList test', ()=> {
    const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];
    test ('"admin" is present', ()=>{
        expect(userList).toContain('admin');
    });
    test ('first is "Nick"', ()=> {
        expect(userList[0]).toBe('Nick');
    })
    test ('last is “new_user_2”', ()=> {
        expect(userList[userList.length-1]).toBe('new_user_2');
    })
    test ('array length is 5', ()=> {
        expect(userList.length).toBe(5);
        expect(userList).toHaveLength(5);
    })
    test ('third element is string type', ()=> {
        expect(typeof userList[2]).toBe('string');
    })
    test ('eigths does not exist', ()=> {
        expect(userList[7]).toBeUndefined;
    })
});
