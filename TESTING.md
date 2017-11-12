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

Because we use Jekyll for this project you don't need to commit any changes to files that are outside of the jekyll directory (unless the site is being built/updated for production).

Basically the current workflow is something like:

  * Make changes in the **/jekyll** directory
  * Run/build the site to test the changes with `bundle exec jekyll serve --watch`(read step #13 below). This builds and serves the site from under **jekyll/_site**, everything under that directory gets ignored with the .gitignore file.
  * Then commit those changes if you are happy with them, excluding anything in the root directory.

Follow these instructions to get set up with [Jekyll](https://jekyllrb.com/):

1. Fork the repo

Note the [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements)

To install some of what's listed on their page, you may find it easier to follow these steps:

rvm can install most of the packages mentioned.

2. You'll need `gcc` and `make` installed on your system to build the gems.
    * Linux : those can often be installed by installing the `build-essential` package.
    * Windows: https://cygwin.com/index.html (Other methods? Please edit this section)
    * Mac : xcode-select --install
3. Install rvm | https://rvm.io/rvm/install
4. Close and re-open the terminal window (this will update your PATH so rvm can be found)
5. Update rvm | run `rvm get stable --autolibs=enable`
6. run `rvm install ruby`
7. Check that Ruby has been updated by running `ruby -v`
8. Update the gem manager by running `gem update --system`
9. Update your gems by running `gem update`
10. If you are missing bundler, please install it `gem install bundler`
11. Install Jekyll | `gem install jekyll`
12. From inside the mhwkb.github.io **jekyll** directory, run `bundle install`
13. To start the Jekyll server | `bundle exec jekyll serve --watch`

Periodically you will need to run `bundle install` in the **jekyll** directory to update the gems (you'll receive errors when you start the Jekyll server).

In your browser, go to http://localhost:4000 and you should see the mhwkb.github.io web site.
