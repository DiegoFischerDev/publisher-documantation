---
title: Angular Sites
nextjs:
  metadata:
    title: Installation
    description: Step-by-step guide to install and configure the Publisher Analytics plugin.
---

For Angular sites, the installation process is similar to React sites. You will need to add the Publisher Analytics plugin to your project's dependencies and import it into your Angular components. The plugin configuration is done in your Angular code.

---

## Pre-requisites

Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.

### Installation

To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:

```js
    <!-- NPAW -->
    <script src="../dist/abtesting.min.js"></script>

    <script>
        npaw.Log.logLevel = npaw.Log.Level.VERBOSE;
        window.plugin = new npaw.Plugin({
            // Account and User
            accountCode: 'abdev',
            'user.name': 'abdevadminuser',
            // Other content/app info
            'app.name': 'ABDevelopment',
            'app.releaseVersion': '0.0.1',
            // AB Testing Config
            'components.config': {
                abtesting: {}
            }
        });

        window.plugin.addComponent(new npaw.ABTesting());
    </script>
    <!-- /NPAW -->
```

This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.

### Mapping Article Elements

After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:

```html
    <section class="story-wrapper" npaw-article>
        <a class="article-link" npaw-article-url href="https://www.example.com/article.html">
            <h3 class="article-title" npaw-article-title>Article Title</h3>
            <p class="article-description" npaw-article-description>Article Description</p>
            <img class="article-image" npaw-article-img src="image.jpg" alt="Article Image">
        </a>
    </section>
```

In this example, the `npaw-article` tag is added to the section that contains the article. The `npaw-article-url`, `npaw-article-title`, `npaw-article-description`, and `npaw-article-img` tags are added to the corresponding elements in the article.

---

## Troubleshooting

If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.

### Support

If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.