module: {
    loaders: [
      {
        test: /\.(png|jpeg)$/,
        loader: 'url?limit=25000'
      }
    ]
  }