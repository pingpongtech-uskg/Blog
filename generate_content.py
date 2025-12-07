import os
import random
import datetime

languages = ['en', 'ja', 'zh-tw']
topics = [
    {
        "en": "The Future of AI Agents",
        "ja": "AIエージェントの未来",
        "zh-tw": "AI Agent 的未來",
        "cat": "AI",
        "tags": ["AI", "Agents", "Future"]
    },
    {
        "en": "Understanding Zero Trust Security",
        "ja": "ゼロトラストセキュリティを理解する",
        "zh-tw": "深入了解零信任安全",
        "cat": "Cybersecurity",
        "tags": ["Security", "Zero Trust"]
    },
    {
        "en": "Hugo vs Jekyll: A Comparison",
        "ja": "HugoとJekyllの比較",
        "zh-tw": "Hugo 與 Jekyll 的比較",
        "cat": "Technology",
        "tags": ["Hugo", "Static Site Generator"]
    },
    {
        "en": "Top 10 VS Code Extensions for DevOps",
        "ja": "DevOps向けVS Code拡張機能トップ10",
        "zh-tw": "DevOps 必備的 10 款 VS Code 套件",
        "cat": "Technology",
        "tags": ["DevOps", "VS Code"]
    },
    {
        "en": "How to Secure Your Cloud Infrastructure",
        "ja": "クラウドインフラを保護する方法",
        "zh-tw": "如何保護您的雲端基礎設施",
        "cat": "Cybersecurity",
        "tags": ["Cloud", "Security"]
    },
    {
        "en": "Introduction to Rust for Python Developers",
        "ja": "Python開発者のためのRust入門",
        "zh-tw": "給 Python 開發者的 Rust 入門",
        "cat": "Technology",
        "tags": ["Rust", "Python", "Coding"]
    }
]

base_dir = "content/posts"

def get_content(lang, topic):
    if lang == 'en':
        return f"""
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## {topic['en']}

The world of {topic['cat']} is evolving rapidly. In this post, we explore why this matters.

1. **Innovation**: Keeping up with trends.
2. **Security**: Staying safe.
3. **Efficiency**: Doing more with less.

Stay tuned for more deep dives!
"""
    elif lang == 'ja':
        return f"""
これはテスト記事です。{topic['ja']}について解説します。
技術の進化は止まりません。

## {topic['ja']}の重要性

1. **革新**: トレンドを追う。
2. **セキュリティ**: 安全を保つ。
3. **効率**: より少ない労力でより多くのことを。

詳しくは次回の記事で！
"""
    elif lang == 'zh-tw':
        return f"""
這是一篇測試文章，關於{topic['zh-tw']}。
技術的世界日新月異。

## 為什麼{topic['zh-tw']}很重要

1. **創新**: 跟上潮流。
2. **安全**: 保持安全。
3. **效率**: 事半功倍。

敬請期待更多深入分析！
"""

for i, topic in enumerate(topics):
    slug = topic['en'].lower().replace(' ', '-')
    folder = os.path.join(base_dir, slug)
    os.makedirs(folder, exist_ok=True)
    
    date = (datetime.date(2024, 1, 1) + datetime.timedelta(days=i*5)).isoformat()
    
    # English
    with open(os.path.join(folder, "index.md"), "w") as f:
        f.write(f"""---
title: "{topic['en']}"
date: {date}
draft: false
tags: {topic['tags']}
categories: ["{topic['cat']}"]
summary: "A pseudo article about {topic['en']}."
---
{get_content('en', topic)}
""")

    # Japanese
    with open(os.path.join(folder, "index.ja.md"), "w") as f:
        f.write(f"""---
title: "{topic['ja']}"
date: {date}
draft: false
tags: {topic['tags']}
categories: ["{topic['cat']}"]
summary: "{topic['ja']}に関する記事です。"
---
{get_content('ja', topic)}
""")

    # Chinese
    with open(os.path.join(folder, "index.zh-tw.md"), "w") as f:
        f.write(f"""---
title: "{topic['zh-tw']}"
date: {date}
draft: false
tags: {topic['tags']}
categories: ["{topic['cat']}"]
summary: "關於{topic['zh-tw']}的文章。"
---
{get_content('zh-tw', topic)}
""")

print("Generated 18 pseudo articles.")
