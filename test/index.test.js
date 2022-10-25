let newPage = require('../modules/newPage');
let indexMapper = require('../modules/indexMapper');
let helpers = require('../modules/helpers')

describe('test something',() => {
  // let newPage;
  const mockItem = "this should be a string";
  const mockFunc = jest.fn();
  
  // beforeEach(() => {
  //   jest.mock('newPage.js', () => {
  //     return jest.fn()
  //   });
  // });
  // newPage = jest.requireActual('../newPage.js');

  // afterEach(() => {
  //   jest.resetAllMocks();
  //   jest.resetModules();
  // });
 
  // test('should run newPage', () => {
  //   const n = newPage(mockItem);
  //   epxect(n).toEqual(mockItem.toUpperCase());
  // });

  
  test('should do something', () => {
    newPage = mockFunc.mockReturnValue(mockItem.toUpperCase())
    const n = newPage()
    expect(n).toEqual(mockItem.toUpperCase())
    expect(mockFunc).toBeCalled()
  })

  test('should run index mapper', () => {
    jest.mock('../modules/newPage', () => jest.fn());
    const a = newPage.mockReturnValue('alibaba')
    console.log(a)
    // const spy = jest.spyOn(newPage, 'newPage')
    const i = indexMapper(mockItem);
    // expect(spy).toBeCalled()
    console.log(i)
    expect(mockFunc).toBeCalled()
    
  })



  // test('should run indemapper', () => {
  //   // helpers.newPage = mockFunc.mockReturnValue(mockItem.toUpperCase());
  //   const spy = jest.spyOn(helpers, 'newPage').mockImplementation(() => ('alibaba'))
  //   const i = indexMapper(mockItem);
  //   console.log(i)
  //   expect(i).toEqual(mockItem.toUpperCase().split(' '))
  //   // expect(spy).toHaveBeenCalled()
  //   // expect(mockFunc).toBeCalled()
  // })
});