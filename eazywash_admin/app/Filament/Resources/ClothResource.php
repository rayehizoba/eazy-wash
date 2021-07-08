<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ClothResource\Pages;
use App\Filament\Resources\ClothResource\RelationManagers;
use App\Filament\Roles;
use Filament\Resources\Forms\Components;
use Filament\Resources\Forms\Form;
use Filament\Resources\Resource;
use Filament\Resources\Tables\Columns;
use Filament\Resources\Tables\Filter;
use Filament\Resources\Tables\Table;

class ClothResource extends Resource
{
    public static $icon = 'heroicon-o-collection';

    public static function form(Form $form)
    {
        return $form
            ->schema([
                Components\TextInput
                    ::make('name')->autofocus()->required(),
                Components\TextInput
                    ::make('rate')->required()->numeric()->prefix('💲'),
            ]);
    }

    public static function table(Table $table)
    {
        return $table
            ->columns([
                Columns\Text::make('name')->primary(),
                Columns\Text::make('rate')->currency(),
            ])
            ->filters([
                //
            ]);
    }

    public static function relations()
    {
        return [
            RelationManagers\CategoriesRelationManager::class,
        ];
    }

    public static function routes()
    {
        return [
            Pages\ListCloths::routeTo('/', 'index'),
            Pages\CreateCloth::routeTo('/create', 'create'),
            Pages\EditCloth::routeTo('/{record}/edit', 'edit'),
        ];
    }
}
