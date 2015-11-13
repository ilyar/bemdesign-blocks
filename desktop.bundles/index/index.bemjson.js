module.exports = {
  block : 'page',
  title : 'bem-kit',
  favicon : '/favicon.ico',
  head : [
    { elem : 'meta', attrs : { name : 'description', content : '' } },
    { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
    { elem : 'css', url : 'index.min.css' }
  ],
  scripts: [{ elem : 'js', url : 'index.min.js' }],
  mods : { theme : 'islands' },
  content : [
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 6, lw : 6, xl : 6, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [

                {
                  block : 'document-list',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      documentTitle : 'Doc1',
                      documentText : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    },  
                    {
                      documentTitle : 'Doc2',
                      documentText : 'Fames ac turpis egestas.'
                    }  
                  ].map(function(item) {
                    return [
                      {
                        block: 'document',
                        mix : { block: 'document-list', elem : 'item'},
                        content: [
                          {
                            elem : 'image',
                            content : ''
                          },
                          {
                            elem : 'content',
                            content: [
                              {
                                block: 'document-content',
                                content: [
                                  {
                                    elem : 'title',
                                    content : item.documentTitle
                                  },
                                  {
                                    elem : 'text',
                                    content : item.documentText
                                  },
                                ]
                              }
                            ]
                          },
                        ]
                      }
                    ]
                  })
                },
                {
                  block : 'user-list',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      userName : 'Mikhail Koloskov',
                      userPosition : 'UI Engineer'
                    },  
                    {
                      userName : 'Tobias',
                      userPosition : 'Product Designer'
                    } 
                  ].map(function(item) {
                    return [
                      {
                        block: 'user',
                        mix : { block: 'user-list', elem : 'item'},
                        content: [
                          {
                            elem : 'image',
                            content : ''
                          },
                          {
                            elem : 'content',
                            content: [
                              {
                                block: 'user-content',
                                content: [
                                  {
                                    elem : 'name',
                                    content : item.userName
                                  },
                                  {
                                    elem : 'position',
                                    content : item.userPosition
                                  },
                                ]
                              }
                            ]
                          },
                        ]
                      }
                    ]
                  })

                },
                {
                  block : 'top-news-list',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      topNewsDate : '24.24.24',
                      topNewsText : 'News'
                    },  
                    {
                      topNewsDate : '24.24.24',
                      topNewsText : 'News2'
                    } 
                  ].map(function(item) {
                    return [
                      {
                        block: 'top-news',
                        mix : { block: 'top-news-list', elem : 'item'},
                        content: [
                          {
                            elem : 'date',
                            content : item.topNewsDate
                          },
                          {
                            elem : 'text',
                            content : item.topNewsText
                          },
                        ]
                      }
                    ]
                  })
                },

              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 6, xl : 6 },
          content : [
            {
              block : 'position-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  position : 'Front-end developer'
                },  
                {
                  position : 'UI designer'
                },
              ].map(function(item) {
                return [
                  {
                    block: 'position',
                    mix : { block: 'position-list', elem : 'item'},
                    content : [
                      {
                        elem : 'image'
                      },
                      {
                        elem : 'text',
                        content : item.position
                      }
                    ]
                  }
                ]
              })
            },
            {
              block : 'news-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  newsContentTitle : 'Name',
                  newsContentDate : '24.24.24',
                  newsContentText : 'Text'
                },
                {
                  newsContentTitle : 'Name',
                  newsContentDate : '24.24.24',
                  newsContentText : 'Text'
                }
              ].map(function(item) {
                return [
                  {
                    block: 'news',
                    mix : { block: 'news-list', elem : 'item'},
                    content: [
                      {
                        elem : 'image'
                      },
                      {
                        elem : 'content',
                        content: [
                          {
                            block : 'news-content',
                            content: [
                              {
                                  elem : 'title',
                                  content : item.newsContentTitle
                              },
                              {
                                  elem : 'date',
                                  content : item.newsContentDate
                              },
                              {
                                  elem : 'text',
                                  content : item.newsContentText
                              },
                            ]
                          }
                        ]
                      },
                    ]
                  }
                ]
              })
            },
          ]
        }
      ]
    }
  ]
};
