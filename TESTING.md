# TESTING

This document helps explain how to edit html and CSS on the web site, and
optionally, how to setup Jekyll to test your code.

This is an early draft and is more likely to contain errors or omissions.
Please edit if you find any problems, and
[contact us](https://github.com/mhwkb/mhwkb.github.io#contact) if you need help.


## Testing the site

To edit the html files where the site is generated, those are located in

[_includes](https://github.com/mhwkb/mhwkb.github.io/tree/master/jekyll/_includes) and [_layouts](https://github.com/mhwkb/mhwkb.github.io/tree/master/jekyll/_layouts)

If you're working on the html or [CSS](https://github.com/mhwkb/mhwkb.github.io/blob/master/CONTRIBUTING.md#css-design-we-use-bootstrap), in some cases you'll want to test your changes.

The CSS file is also under the Jekyll directory:
https://github.com/mhwkb/mhwkb.github.io/tree/master/jekyll/assets/css

Note: Don't edit the CSS file in the root directory (it will get overwritten
by the one under the Jekyll directory)

## We use [Jekyll](https://jekyllrb.com/) to generate the site.

1. Fork the repo

Note the [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements)

To install some of what's listed on their page, you may find it easier to follow these steps:

rvm can install most of the packages mentioned.

1. You'll need `gcc` and `make` installed on your system to build the gems.
    * Linux : those can often be installed by installing the `build-essential` package.
    * Windows: https://cygwin.com/index.html (Other methods? Please edit this section)
    * Mac : (Please edit this section)
1. Install rvm | https://rvm.io/rvm/install
3. Close and re-open the terminal window (this will update your PATH so rvm can be found)
2. Update rvm | run `rvm get stable --autolibs=enable`
4. run `rvm install ruby`
5. Check that Ruby has been updated by running `ruby -v`
6. Update the gem manager by running gem update --system.
7. Update your gems by running gem update.
8. If you are missing bundler, please install it `gem install bundler`
9. Install Jekyll | `gem install jekyll`
10. From inside the mhwkb.github.io **jekyll** directory, run `bundle install`
11. To start the Jekyll server | `bundle exec jekyll serve --watch`

Periodically you will need to run `bundle install` in the **jekyll** directory to update the gems (you'll receive errors when you start the Jekyll server).

In your browser, go to https://localhost:4000 and you should see the mhwkb.github.io web site.
